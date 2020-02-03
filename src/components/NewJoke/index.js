import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createJoke } from '../../store/actions/jokes.actions';
import { Redirect } from 'react-router-dom';

import ActionButton from '../ActionButton';
import './NewJoke.scss';

const NewJoke = (props) => {
  console.log(props);
  const { onCreateJoke, createdJokes, firebaseAuth } = props;

  const [newJoke, setNewJoke] = useState("");

  const handleJokeSunmission = () => {
    onCreateJoke(newJoke);
  };

  let actionButton;
  if (createdJokes.isCreating) actionButton = (<ActionButton action={() => handleJokeSunmission()} icon={<i className="fas fa-circle-notch fa-spin" />} isDisabled/>);
  else actionButton = (<ActionButton action={() => handleJokeSunmission()} icon={<i className="fas fa-check" />} />);

  if (firebaseAuth.isEmpty) {
    return <Redirect to="/auth#r=1" />;
  }

  return (
    <main className="page__main new-joke">
      <div className="joke-card">
        <div className="joke-background">
          <textarea
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
