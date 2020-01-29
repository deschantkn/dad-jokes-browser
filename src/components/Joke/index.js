import React, { useState, useEffect } from 'react'
import ReactGA from 'react-ga';
import SwipeableViews from 'react-swipeable-views';
import axios from 'axios';
import SocialShare from '../SocialShare';

const trackingId = process.env.REACT_APP_GA_ID;
ReactGA.initialize(trackingId);

function Joke(props) {
  ReactGA.set({
    page: props.history.location.pathname
  });

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
            'Accept': 'application/json'
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
        'Accept': 'application/json'
      }
    });

    if (response.status === 200) {
      const extraJoke = parseJokes([response.data]);
      rawJokeData.push(response.data);
      setRawJokeData(rawJokeData);
      jokes.push(extraJoke);
      setJokes(jokes);
      setCurrentJoke(index);
    }

    ReactGA.event({
      category: "Swipe",
      action: "User swiped joke card"
    });
  };

  useEffect(() => {
    if (jokes && jokes.length === 0) fetchInitialJokes();
  });

  if (jokes && jokes.length > 0) {
    return (
      <main className="page__main animated shake">

        <h4>Swipe right to view more</h4>

        <SwipeableViews 
          className="page__swipe"
          enableMouseEvents={true}
          onChangeIndex={(index, indexLatest) => handleSwipe(index, indexLatest)}
        >
          {jokes}
        </SwipeableViews>

        <SocialShare joke={rawJokeData[currentJoke].joke} />
      </main>
    )
  }

  return (
    <main className="page__main animated zoomIn">
      <SwipeableViews 
        className="page__swipe"
      >  
        <div className="joke-card">
          <div className="joke-background">
          <div class="lds-ripple"><div></div><div></div></div>
          </div>
        </div>
      </SwipeableViews>

    </main>
  )
}

export default Joke;
