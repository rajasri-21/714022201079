import React from "react";

function UrlList({ urls }) {
  return (
    <div>
      <h3>Shortened URLs</h3>
      <ul>
        {urls.map((item, index) => (
          <li key={index}>
            Original: {item.longUrl} <br />
            Short: <a href={item.shortUrl}>{item.shortUrl}</a> <br />
            Expires: {item.expiry}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UrlList;
