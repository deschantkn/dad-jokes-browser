import React, { useState, useEffect } from 'react'

function Jokes() {
  const [jokes, setJokes] = useState([]);

  const handleSwipe = (index, indexLatest) => {
    // Fetch one more and add each time user swipes
  };

  const fetchJokes = async () => {
    // Fetch 5 jokes
    const fetchedJokes = [];
    for (let i = 0; i < 5; i++) {
      const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET'
      });
      if (response.ok) {
        fetchedJokes.push(await response.json());
      }
    }
    setJokes(fetchedJokes);
  };

  useEffect(() => {
    fetchJokes();
  });

  if (jokes && jokes.length > 0) {
    const parsedJokes = jokes.map(joke => (
      <div className="joke-card">
        <div className="joke-background">
          <p className="joke">{joke.joke}</p>
        </div>
      </div>
    ));
    return parsedJokes;
  }

  return (
    <div className="joke-card">
      <div className="joke-background">
        <p className="joke">Loading jokes...</p>
      </div>
    </div>
  )
}

export default Jokes;
