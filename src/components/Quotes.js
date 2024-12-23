import React, { useState, useEffect } from "react";
function QuotesComponent() {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch("https://restcountries-v1.p.rapidapi.com/callingcode/50", {
      method: "GET",
      headers: {
        'x-rapidapi-key': '169d01c0c4msh521c559d1a825fep1068a1jsn66ec413a8e08',
		'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com'
      },
    })
      .then((response) => response.text())
      .then((data) => {
        // setJoke(data[0].joke);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>Joke of the day:</h2>
      {joke && <p>{joke}</p>}
    </div>
  );
}
export default QuotesComponent;