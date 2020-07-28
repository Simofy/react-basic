import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from '../const/routes';
import './App.css';
import Header from './components/Header';
import Landing from './routes/Landing';
import Task from './routes/Task';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Container>
            <Switch>
              <Route exact path={routes.task}>
                <Task />
              </Route>
              <Route exact path={routes.landing}>
                <Landing />
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </div>
  );
}

export default App;
