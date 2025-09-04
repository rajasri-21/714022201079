// Custom Logger Middleware (no console.log allowed)
export function logEvent(message, data = {}) {
  const timestamp = new Date().toISOString();
  const logEntry = { message, data, timestamp };

  // Store in localStorage (client-side logging)
  let logs = JSON.parse(localStorage.getItem("appLogs")) || [];
  logs.push(logEntry);
  localStorage.setItem("appLogs", JSON.stringify(logs));
}
