import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Joke from '../Joke';
import Footer from '../Footer';
import About from '../About';
import Auth from '../Auth';

function App() {
  return (
    <div className="container-fluid page__body">
      <Header />
      <Switch>
        <Route exact path="/" component={Joke} />
        <Route exact path="/about" component={About} />
        <Route export path="/auth" component={Auth} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
