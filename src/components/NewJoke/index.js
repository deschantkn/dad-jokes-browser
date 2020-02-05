import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createJoke } from '../../store/actions/jokes.actions';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faCheck } from '@fortawesome/free-solid-svg-icons'

import ActionButton from '../ActionButton';
import './NewJoke.scss';

const NewJoke = (props) => {
  const { onCreateJoke, createdJokes, firebaseAuth, history } = props;

  const [newJoke, setNewJoke] = useState("");
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);

  const handleJokeSunmission = async () => {
    if (newJoke.length <= 0) {
      setIsFieldEmpty(true);
      return;
    }

    await onCreateJoke(newJoke);
    history.push('/jokes');
  };

  let actionButton;
  if (createdJokes.isCreating) actionButton = (<ActionButton action={() => handleJokeSunmission()} icon={<FontAwesomeIcon icon={faCircleNotch} spin />} isDisabled/>);
  else actionButton = (<ActionButton action={() => handleJokeSunmission()} icon={<FontAwesomeIcon icon={faCheck} />} />);

  if (firebaseAuth.isLoaded && firebaseAuth.isEmpty) {
    return <Redirect to={{
      pathname: "/auth",
      state: { from: "/create" }
    }} />;
  }

  return (
    <main className="page__main new-joke">

      <h4>Time to get creative</h4>

      { isFieldEmpty ?
      <div className="alert alert-danger custom-alert" role="alert">
        How is that funny? <span role="img" aria-label="Poker Face">😐</span>
      </div>
      : null }

      <div className="joke-card">
        <div className="joke-background">
          <textarea
            className="form-control"
            value={newJoke} 
            onChange={e => setNewJoke(e.target.value)} 
            placeholder="..." />
        </div>
      </div>
      
      {actionButton}
    </main>
  )
}

const mapStateToProps = ({ jokes, firebase : { auth } }) => ({ createdJokes: jokes, firebaseAuth: auth });

const mapDispatchToProps = dispatch => ({
  onCreateJoke: (joke) => dispatch(createJoke(joke))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewJoke);
