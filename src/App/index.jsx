import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './components/Header';
import { routes } from '../const/routes';
import Task from './routes/Task';
import Landing from './routes/Landing';
import { Container } from '@material-ui/core';

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
// 
export default App;
