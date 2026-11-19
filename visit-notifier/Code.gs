/**
 * Portfolio visit notifier (Google Apps Script web app).
 *
 * Paste this into a new project at https://script.google.com, then deploy it as a
 * web app (Execute as: Me, Who has access: Anyone). Put the deployment URL in
 * .env as REACT_APP_VISIT_NOTIFY_URL, then rebuild and deploy the site.
 */

const NOTIFY_EMAIL = "szczepan@letkiewicz.pl";

function doGet(e) {
  const params = (e && e.parameter) || {};

  // Increment the visit counter under a lock so simultaneous visits aren't lost
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  const props = PropertiesService.getScriptProperties();
  const count = Number(props.getProperty("visitCount") || 0) + 1;
  props.setProperty("visitCount", String(count));
  lock.releaseLock();

  const body = [
    "Someone just visited your portfolio.",
    "",
    "Total visits: " + count,
    "Time: " + new Date().toString(),
    "Page: " + (params.page || "-"),
    "Came from: " + (params.referrer || "direct / unknown"),
    "Language: " + (params.lang || "-"),
    "Timezone: " + (params.tz || "-"),
    "Screen: " + (params.screen || "-"),
  ].join("\n");

  MailApp.sendEmail(NOTIFY_EMAIL, "Portfolio visit #" + count, body);

  return ContentService.createTextOutput(String(count));
}
