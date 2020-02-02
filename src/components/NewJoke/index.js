import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createJoke } from '../../store/actions/jokes.actions';

import ActionButton from '../ActionButton';
import './NewJoke.scss';

const NewJoke = (props) => {
  const { onCreateJoke, createdJokes } = props;

  const [newJoke, setNewJoke] = useState("");

  const handleJokeSunmission = () => {
    onCreateJoke(newJoke);
  };

  let actionButton;
  if (createdJokes.isCreating) actionButton = (<ActionButton action={() => handleJokeSunmission()} icon={<i className="fas fa-circle-notch fa-spin" />} isDisabled/>);
  else actionButton = (<ActionButton action={() => handleJokeSunmission()} icon={<i className="fas fa-check" />} />);

  return (
    <main className="page__main new-joke">
      <div className="joke-card">
        <div className="joke-background">
          <textarea value={newJoke} onChange={e => setNewJoke(e.target.value)} placeholder="..." />
        </div>
      </div>
      {actionButton}
    </main>
  )
}

const mapStateToProps = ({ jokes }) => ({ createdJokes: jokes });

const mapDispatchToProps = dispatch => ({
  onCreateJoke: (joke) => dispatch(createJoke(joke))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewJoke);
