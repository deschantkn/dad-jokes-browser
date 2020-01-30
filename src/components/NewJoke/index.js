import React from 'react'

import ActionButton from '../ActionButton';
import './NewJoke.scss';

function NewJoke() {
  return (
    <main className="page__main new-joke">
      <div className="joke-card">
        <div className="joke-background">
          <textarea placeholder="..." />
        </div>
      </div>
      <ActionButton icon={<i class="fas fa-check" />} />
    </main>
  )
}

export default NewJoke;
