import React, { useState } from "react";
import { logEvent } from "../loggerMiddleware";

function UrlForm({ addUrl }) {
  const [url, setUrl] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [validity, setValidity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url.startsWith("http")) {
      alert("Please enter a valid URL!");
      logEvent("Invalid URL entered", { url });
      return;
    }

    addUrl(url, shortcode, validity);
    logEvent("URL Shortened", { url, shortcode, validity });

    setUrl("");
    setShortcode("");
    setValidity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Optional shortcode"
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
      />
      <input
        type="number"
        placeholder="Validity (minutes)"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
}

export default UrlForm;
