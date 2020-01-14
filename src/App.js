import React from 'react';
import Header from './Header';
import Joke from './Joke';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="page__body">
      <Header />
      <Joke />
      <Footer />
    </div>
  );
}

export default App;
