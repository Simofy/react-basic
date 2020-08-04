import { Container } from '@material-ui/core';
import React, { useState, useCallback, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from '../const/routes';
import './App.css';
import Header from './components/Header';
import Landing from './routes/Landing';
import Task from './routes/Task';
import { LanContext, providedHandlers } from './LanContext';
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
  const [handlerList, setHandlerList] = useState<Array<[providedHandlers, Function]>>([]);

  const registerHandler = useCallback((handlerName, handler) => {
    setHandlerList(oldList => ([
      ...oldList,
      [handlerName, handler]
    ]))
  }, []);

  const removeHandler = useCallback((handlerName) => {
    setHandlerList(oldList => {
      return oldList.filter(([handlerOldName]) => handlerOldName !== handlerName);
    });
  }, []);

  const [eventListeners, setEventListeners] = useState<Array<[string, Function]>>([]);
  const removeListener = useCallback((listenerName) => {
    setEventListeners(oldList => {
      return oldList.filter(([listenerOldName]) => listenerOldName !== listenerName);
    });
  }, []);

  const registerListener = useCallback((listenerName, listener) => {
    setEventListeners(oldList => ([
      ...oldList,
      [listenerName, listener]
    ]))
  }, []);
  console.log(eventListeners)

  const callListener = useCallback((listenerName, payload) => {
    console.log(eventListeners)
    for(let i = 0; i < eventListeners.length; i+=1) {
      const [listenerName2, listener] = eventListeners[i];
      if(listenerName2 === listenerName) {
        listener(payload);
      }
    }
  }, [eventListeners]);

  return (
    <LanContext.Provider
      value={{
        onLanguageChange: handleLanChange,
        data: langDict[lang],
        initLang,
        handlerList,
        registerHandler,
        registerListener,
        removeListener,
        callListener,
        removeHandler,
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
