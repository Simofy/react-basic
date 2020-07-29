import { Container } from '@material-ui/core';
import React, { useState, useCallback, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from '../const/routes';
import './App.css';
import Header from './components/Header';
import Landing from './routes/Landing';
import Task from './routes/Task';
import { LanContext } from './LanContext';
import { langEnum, lang as langDict } from '../const/dict';
import { storageKey } from '../api/storage';
import TaskContext from './routes/Task/TaskContext';

let test = 1;
function App() {
  const [lang, setLang] = useState<langEnum>(langEnum.EN);
  const [initLang, setInitLang] = useState(lang);
  useEffect(() => {
    const localLangValue = localStorage.getItem(storageKey.lang) as langEnum;
    if (localLangValue) {
      setLang(localLangValue);
      setInitLang(localLangValue);
    }
  }, []);

  const handleLanChange = useCallback((val: langEnum) => {
    setLang(val);
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey.lang, lang);
  }, [lang]);

  console.log('Testing', test);
  test += 1;
  return (
    <LanContext.Provider
      value={{
        onLanguageChange: handleLanChange,
        data: langDict[lang],
        initLang,
      }}
    >
      <div className="App">
        <Router>
          <div>
            <Header />
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Container>
              <Switch>
                <Route path={routes.task}>
                  <Task />
                </Route>
                <Route path={routes.landing}>
                  <Landing />
                </Route>
              </Switch>
            </Container>
          </div>
        </Router>
      </div>
    </LanContext.Provider>
  );
}

export default App;
