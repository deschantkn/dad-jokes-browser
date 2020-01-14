import React, { useState, useEffect } from 'react'
import SwipeableViews from 'react-swipeable-views';
import axios from 'axios';
import SocialShare from './SocialShare';

function Joke() {
  const [rawJokeData, setRawJokeData] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [currentJoke, setCurrentJoke] = useState(0)

  const fetchInitialJokes = async () => {
    try {
      // Fetch 5 jokes
      let response;
      for (let i = 0; i < 5; i++) {
        response = await axios.get('https://icanhazdadjoke.com/', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'Dad Joke Browser (https://github.com/deschankn/dad-jokes-browser)'
          }
        });

        if (response.status === 200) {
          rawJokeData.push(response.data);
          setRawJokeData(rawJokeData);
        }
      }

      // Parse jokes and set them in state
      setJokes(parseJokes(rawJokeData));
    } catch (error) {
      console.log(error);
    }
  };

  const parseJokes = (jokes) => {
    const parsedJokes = jokes.map(joke => (
      <div key={joke.id} className="joke-card">
        <div className="joke-background">
          <p className="joke">{joke.joke}</p>
        </div>
      </div>
    ));

    return parsedJokes;
  }

  const handleSwipe = async (index, indexLatest) => {
    // Append one more joke each time users swipe
    const response = await axios.get('https://icanhazdadjoke.com/ ', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Dad Joke Browser (https://github.com/deschankn/dad-jokes-browser)'
      }
    });

    if (response.status === 200) {
      const extraJoke = parseJokes([response.data]);
      jokes.push(extraJoke);
      setJokes(jokes);
      setCurrentJoke(index);
    }
  };

  useEffect(() => {
    if (jokes && jokes.length === 0) fetchInitialJokes();
  });

  if (jokes && jokes.length > 0) {
    return (
      <div className="page__joke">

        <SwipeableViews 
          className="page__swipe"
          enableMouseEvents={true}
          onChangeIndex={(index, indexLatest) => handleSwipe(index, indexLatest)}
        >
          {jokes}
        </SwipeableViews>

        <SocialShare joke={rawJokeData[currentJoke].joke} />
      </div>
    )
  }

  return (
    <div className="page__joke">

      <SwipeableViews 
        className="page__swipe"
      >  
        <div className="joke-card">
          <div className="joke-background">
            <p className="joke">Loading...</p>
          </div>
        </div>
      </SwipeableViews>

    </div>
  )
}

export default Joke;
