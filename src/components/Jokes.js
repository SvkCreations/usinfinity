import React, { useState, useEffect } from 'react';
import loadingAnim from "../assets/loading.json";
import Lottie from "lottie-react";

function Jokes() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Misc,Spooky,Dark');
      const data = await response.json();
      const jokeText = data.type === 'single' ? data.joke : `${data.setup} - ${data.delivery}`;
      setJoke(jokeText);
    } catch (error) {
      setJoke('Failed to fetch a joke. Please try again.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="App my-5 py-5 text-center d-flex flex-column justify-content-center align-items-center">
      <h1 className='display-4 fw-bold'>Random Joke</h1>
      {loading ? (
        <Lottie style={{height:'100px'}} animationData={loadingAnim} loop={true} />
      ) : (
        <p className='lead col-10 col-md-4'>{joke}</p>
      )}
      <button className='btn secondary-btn' onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
}

export default Jokes;
