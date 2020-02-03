import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './Jokes.scss';

function Jokes(props) {
  const { jokes } = props;
  return (
    <div className="page__main page__jokes">

      <h4>Your jokes</h4>

      {/* // TODO: Implement 80-character limit on jokes */}
      <ul className="joke-list">
        { jokes ? 
          jokes.map(joke => (
            <li key={joke.id}>
              <div className="joke-card">
                <p className="joke-summary">{joke.joke}</p>
              </div>
            </li>
          ))
          : 'Loading...'
        }
      </ul>
    </div>
  );
}

const mapStateToProps = ({ firestore: { ordered: { jokes } } }) => ({ jokes });

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'jokes' }
  ])
)(Jokes);
