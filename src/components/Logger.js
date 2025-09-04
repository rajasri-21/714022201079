import React, { useEffect, useState } from "react";

function Logger() {
  const [logs, setLogs] = useState([]);

  // Load logs from localStorage
  const loadLogs = () => {
    const storedLogs = JSON.parse(localStorage.getItem("appLogs")) || [];
    setLogs(storedLogs);
  };

  useEffect(() => {
    // Load on mount
    loadLogs();

    // Listen for storage changes (when new logs are added)
    const handleStorageChange = () => loadLogs();

    window.addEventListener("storage", handleStorageChange);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Application Logs</h3>
      {logs.length === 0 ? (
        <p>No logs yet.</p>
      ) : (
        <ul>
          {logs.map((log, index) => (
            <li key={index}>
              <strong>{log.timestamp}</strong> - {log.message}
              <br />
              {Object.keys(log.data).length > 0 && (
                <small>{JSON.stringify(log.data)}</small>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Logger;
