import React, { useState, useEffect } from 'react'
import SwipeableViews from 'react-swipeable-views';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faShareAlt } from '@fortawesome/free-solid-svg-icons'

import Dropdown from '../Dropdown';
import ActionButton from '../ActionButton';


function Joke(props) {
  const { history } = props;

  const [rawJokeData, setRawJokeData] = useState([]);
  const [jokes, setJokes] = useState([]);

  const fetchInitialJokes = async () => {
    try {
      let response;
      // Start by fetching 5 jokes
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
    const parsedJokes = jokes.map(joke => {
      const message = `${joke.joke} - More dad jokes on https://djbrowse.herokuapp.com #dadjokes`;
      const dropdownContent = (
        <React.Fragment>
          <a target="_blank" rel="noopener noreferrer" href={`whatsapp://send?text=${message}`} data-action="share/whatsapp/share"><li>Whatsapp</li></a>
          <a target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${message}&hashtags=DadJoke`}><li>Twitter</li></a>
        </React.Fragment>
      );
    
      return (
        <div key={joke.id} className="joke-card">
          <div className="joke-background">
            <div className="joke">
              <p>{joke.joke}</p>
              <div className="joke-info d-flex align-items-center justify-content-end">
                <Dropdown dropdownButton={<FontAwesomeIcon icon={faShareAlt} />} dropdownContent={dropdownContent} />
              </div>
            </div>
          </div>
        </div>
      );
    });

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
      jokes.push(extraJoke);
      setJokes(jokes);
    }
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

        <h4>Or write your own puns!</h4>
        <ActionButton icon={<FontAwesomeIcon icon={faPen} />} action={() => history.push("/create")} />
      </main>
    )
  }

  return (
    <main className="page__main animated zoomIn">
      <div className="lds-ripple"><div></div><div></div></div>
    </main>
  )
}

export default Joke;
