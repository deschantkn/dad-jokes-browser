import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getJokes } from '../../store/actions/jokes.actions';

import './Jokes.scss';
import ActionButton from '../ActionButton';

function Jokes(props) {
  const { jokes, firebaseAuth, onGetJoke, history } = props;

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
      <main className="page__main page__jokes">

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

        <ActionButton icon={<i className="fas fa-pen" />} action={() => history.push("/create")} />
      </main>
    );
  } else if (jokes && jokes.length === 0) {
    return (
      <main className="page__main page__jokes">

        <h4>Your jokes</h4>

        <ul className="joke-list">
          <li>
            <div className="joke-card">
              <p className="joke-summary">You don't have any jokes yet</p>
            </div>
          </li>
        </ul>

        <ActionButton icon={<i className="fas fa-pen" />} action={() => history.push("/create")} />
      </main>
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
