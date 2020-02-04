import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getJokes } from '../../store/actions/jokes.actions';

import './Jokes.scss';

function Jokes(props) {
  const { jokes, firebaseAuth, onGetJoke } = props;

  useEffect(() => {
    if (firebaseAuth.isLoaded) onGetJoke();
  }, [onGetJoke, firebaseAuth.isLoaded]);

  if (firebaseAuth.isLoaded && firebaseAuth.isEmpty) {
    return <Redirect to={{
      pathname: "/auth",
      state: { from: "/jokes" }
    }} />;
  }

  if (jokes && jokes.length > 0) {
    return (
      <div className="page__main page__jokes">

        <h4>Your jokes</h4>

        <ul className="joke-list">
          {
            jokes.map(joke => (
              <li key={joke.createdOn}>
                <div className="joke-card">
                  <p className="joke-summary">{joke.joke}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }

  return (
    <main className="page__main animated zoomIn">
      <div className="lds-ripple"><div></div><div></div></div>
    </main>
  )
}

const mapStateToProps = ({ jokes: { jokesList }, firebase: { auth } }) => ({ jokes: jokesList, firebaseAuth: auth });

const mapDispatchToProps = (dispatch) => ({
  onGetJoke: () => dispatch(getJokes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
