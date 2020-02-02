import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createJoke } from '../../store/actions/jokes.actions';

import ActionButton from '../ActionButton';
import './NewJoke.scss';

const NewJoke = (props) => {
  const { onCreateJoke } = props;
  const [newJoke, setNewJoke] = useState("");

  const handleJokeSunmission = () => {
    onCreateJoke(newJoke);
  };

  return (
    <main className="page__main new-joke">
      <div className="joke-card">
        <div className="joke-background">
          <textarea value={newJoke} onChange={e => setNewJoke(e.target.value)} placeholder="..." />
        </div>
      </div>
      <ActionButton action={() => handleJokeSunmission()} icon={<i className="fas fa-check" />} />
    </main>
  )
}

const mapDispatchToProps = dispatch => ({
  onCreateJoke: (joke) => dispatch(createJoke(joke))
});

export default connect(null, mapDispatchToProps)(NewJoke);
