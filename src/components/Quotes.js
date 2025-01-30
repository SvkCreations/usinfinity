import React, { useState, useEffect } from "react";
function Quotes() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    const proxyUrl = "https://api.allorigins.win/get?url="; // CORS proxy
      const targetUrl = encodeURIComponent("https://favqs.com/api/qotd");
    fetch(`${proxyUrl}${targetUrl}`,{
        headers: {
          "Accept": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => {
        let content = JSON.parse(data.contents)
        setQuote(content.quote.body)
        setAuthor(content.quote.author)
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="my-5 pb-5 d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-3 fw-bold text-center">Quote of the day:</h1>
      <p className="lead fw-bold text-center col-10 col-md-4">"{quote}"</p>
      <p className="lead text-center">-{author}</p>
    </div>
  );
}
export default Quotes;