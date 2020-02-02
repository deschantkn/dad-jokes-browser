import React from 'react';

import './Jokes.scss';

function Jokes() {
  return (
    <div className="page__main page__jokes">

      <h4>Your jokes</h4>

      <ul className="joke-list">
        <li>
          <div className="joke-card">
            {/* // TODO: Implement 80-character limit on jokes */}
            <p className="joke-summary">Yokhdihfkdfs dsf dfsdfdfadsfs adfsafsad asdfsadfsdfagsa adfasdfds sfgasgsffdf ...</p>
          </div>
        </li>

        <li>
          <div className="joke-card">
            {/* // TODO: Implement 80-character limit on jokes */}
            <p className="joke-summary">Yokhdihfkdfs dsf dfsdfdfadsfs adfsafsad asdfsadfsdfagsa adfasdfds sfgasgsffdf ...</p>
          </div>
        </li>

        <li>
          <div className="joke-card">
            {/* // TODO: Implement 80-character limit on jokes */}
            <p className="joke-summary">Yokhdihfkdfs dsf dfsdfdfadsfs adfsafsad asdfsadfsdfagsa adfasdfds sfgasgsffdf ...</p>
          </div>
        </li>
    
        <li>
          <div className="joke-card">
            {/* // TODO: Implement 80-character limit on jokes */}
            <p className="joke-summary">Yokhdihfkdfs dsf dfsdfdfadsfs adfsafsad asdfsadfsdfagsa adfasdfds sfgasgsffdf ...</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Jokes;
