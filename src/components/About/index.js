import React from 'react'

function About() {
  return (
    <main className="page__main page__about">
      <p>
        A quick project I hacked together so that to easily find and share puns!
        {" "}
        <span role="img" aria-label="Smiling Emoji">😆</span>
      </p>

      <h3>Tools and Resources</h3>

      <ul>
        <li>Designed with <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com">Figma</a></li>
        <li>Built with <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React.js</a></li>
        <li>Dad jokes are from the <a target="_blank" rel="noopener noreferrer" href="https://icanhazdadjoke.com/api">icanhazdadjoke.com API</a></li>
        <li>Icons from <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a></li>
        <li>Fonts from <a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/?selection.family=Noto+Sans|Pacifico|Sniglet">Google Fonts</a></li>
        <li>Loading icon from <a target="_blank" rel="noopener noreferrer" href="https://loading.io/css">loading.io</a></li>
        <li>Animations from <a target="_blank" rel="noopener noreferrer" href="https://daneden.github.io/animate.css/">loading.io</a></li>
      </ul>

      <h5>
        <strong>P.S: </strong>
        If you enjoy dad jokes too then send me your funniest ones on
        {" "}
        <a href="https://twitter.com/deschantk">Twitter!</a>
        {" "}
        <span role="img" aria-label="Smiling Emoji">😌</span>
      </h5>

      <p>Made with <span role="img" aria-label="Heart Emoji">❤️</span> by <a href="https://github.com/deschantkn">Deschant</a></p>
    </main>
  )
}

export default About;
