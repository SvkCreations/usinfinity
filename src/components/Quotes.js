import React, { useEffect, useState } from 'react';

const QuotesComponent = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  const api_url = "https://zenquotes.io/api/quotes/";

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(api_url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Adding CORS header
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setQuotes(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div>
      <h1>Inspirational Quotes</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {quotes.length > 0 ? (
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>
              "{quote.q}" - <strong>{quote.a}</strong>
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default QuotesComponent;
