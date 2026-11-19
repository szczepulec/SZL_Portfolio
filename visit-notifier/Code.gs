/**
 * Portfolio visit notifier (Google Apps Script web app).
 *
 * Each visit is logged as a row in a Google Sheet ("Portfolio visits", created in
 * your Drive on the first visit) and you get an email with the visit details.
 *
 * This file is only a copy: the code that runs lives at https://script.google.com.
 * After changing it there, use Deploy > Manage deployments > Edit > Version: New
 * version, so the existing /exec URL keeps working.
 */

const NOTIFY_EMAIL = "szczepan@letkiewicz.pl";
const SHEET_NAME = "Portfolio visits";
const HEADERS = ["#", "Date", "Time", "Page", "Came from", "Language", "Timezone", "Screen"];

function doGet(e) {
  const params = (e && e.parameter) || {};

  // Lock so simultaneous visits don't get the same number
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  const sheet = getVisitSheet();
  const count = sheet.getLastRow(); // header row + previous visits = this visit's number
  const now = new Date();
  const tz = Session.getScriptTimeZone();

  const row = [
    count,
    Utilities.formatDate(now, tz, "yyyy-MM-dd"),
    Utilities.formatDate(now, tz, "HH:mm:ss"),
    params.page || "-",
    params.referrer || "direct / unknown",
    params.lang || "-",
    params.tz || "-",
    params.screen || "-",
  ];
  sheet.appendRow(row);
  lock.releaseLock();

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: "Portfolio visit #" + count + " – " + row[1] + " " + row[2],
    htmlBody: buildEmail(row, sheet.getParent().getUrl()),
  });

  return ContentService.createTextOutput(String(count));
}

// Returns the visits sheet, creating the spreadsheet on first use
function getVisitSheet() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty("sheetId");
  if (id) return SpreadsheetApp.openById(id).getSheets()[0];

  const ss = SpreadsheetApp.create(SHEET_NAME);
  const sheet = ss.getSheets()[0];
  sheet.appendRow(HEADERS);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  sheet.setFrozenRows(1);
  props.setProperty("sheetId", ss.getId());
  return sheet;
}

function buildEmail(row, sheetUrl) {
  const cell = "padding:6px 12px;border:1px solid #ddd;text-align:left;";
  const rows = HEADERS.map(function (h, i) {
    return "<tr><th style='" + cell + "background:#f4f4f4'>" + h + "</th>" +
      "<td style='" + cell + "'>" + escapeHtml(String(row[i])) + "</td></tr>";
  }).join("");

  return "<p>Someone just visited your portfolio.</p>" +
    "<table style='border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px'>" +
    rows + "</table>" +
    "<p><a href='" + sheetUrl + "'>Open the full visit log</a></p>";
}

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
