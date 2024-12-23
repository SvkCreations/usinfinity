import React, { useEffect, useState } from 'react';

const QuotesComponent = () => {
  const [error, setError] = useState(null);

  const api_url = "https://zenquotes.io/api/quotes/";

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(api_url, {
          mode: 'no-cors', // Disable CORS
        });

        // With 'no-cors', response data is inaccessible
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log('Response received but cannot access data in no-cors mode.');
      } catch (err) {
        setError(err.message);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!error && <p>Fetching quotes...</p>}
    </div>
  );
};

export default QuotesComponent;
