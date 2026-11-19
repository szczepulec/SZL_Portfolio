// Pings the Google Apps Script in visit-notifier/Code.gs, which counts the
// visit and sends an email. Fires once per browser session, only in production.
// Visit the site once with ?ignoreme to stop your own browser from triggering it.
export const notifyVisit = () => {
  const NOTIFY_URL = process.env.REACT_APP_VISIT_NOTIFY_URL;

  if (!NOTIFY_URL || process.env.NODE_ENV !== "production") return;

  try {
    if (window.location.search.includes("ignoreme")) {
      localStorage.setItem("ignoreVisitNotify", "true");
    }
    if (localStorage.getItem("ignoreVisitNotify") === "true") return;
    if (sessionStorage.getItem("visitNotified")) return;
    sessionStorage.setItem("visitNotified", "true");
  } catch (e) {
    // Storage unavailable (e.g. private mode): still notify
  }

  const params = new URLSearchParams({
    page: window.location.pathname + window.location.hash,
    referrer: document.referrer,
    lang: navigator.language,
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: `${window.screen.width}x${window.screen.height}`
  });

  fetch(`${NOTIFY_URL}?${params}`, { mode: "no-cors" }).catch(() => {});
};
