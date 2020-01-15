import React from 'react'

function About() {
  return (
    <div className="page__body page__about">
      <h2>Dad Joke Browser</h2>
      <p>
        A quick project I hacked together so that I could indulge in my love of dad jokes a little easier! They can crack me up!
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
      <h4>
        <strong>P.S: </strong>
        If you enjoy dad jokes too then send me your funniest ones on
        {" "}
        <a href="https://twitter.com/deschantk">Twitter!</a>
        {" "}
        <span role="img" aria-label="Smiling Emoji">😌</span>
      </h4>
    </div>
  )
}

export default About;
