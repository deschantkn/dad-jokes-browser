import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Joke from './Joke';
import Footer from './Footer';
import About from './About';

function App() {
  return (
    <div className="page__body">
      <Header />
      <Switch>
        <Route exact path="/" component={Joke} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
