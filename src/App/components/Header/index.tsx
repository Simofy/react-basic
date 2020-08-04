import Select from '@material-ui/core/Select';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  MenuItem,
  
} from '@material-ui/core';

import {Alert} from '@material-ui/lab';

import React, {
  useCallback,
  useState,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../const/routes';
import { LanContext } from '../../LanContext';
import { langEnum, langIndexRoutes, langArray } from '../../../const/dict';
export default function Header() {
  const { 
    onLanguageChange, 
    data, 
    initLang, 
    registerHandler, 
    handlerList,
    callListener,
    removeHandler 
  } = useContext(LanContext);
  const [curLan, setCurLan] = useState<langEnum>(langEnum.EN);
  const [alertText, setAlertText] = useState("");
  console.log("Header1",handlerList);
  
  const handleHeaderUpdate = useCallback((newAlertValue: any) => {
    setAlertText(newAlertValue);
    const random = `Random: ${Math.random() * 100}`;
    callListener('a', random);
  }, [callListener, ]);

  useEffect(() => {
    registerHandler("headerUpdate", handleHeaderUpdate);
    return () => {
      removeHandler("headerUpdate");
    }
  }, []);

  useEffect(() => {
    setCurLan(initLang);
  }, [initLang]);

  const handleLanChange = useCallback((event) => {
    const {
      target: { value },
    } = event;
    onLanguageChange(value);
    setCurLan(value);
  }, []);

  const dropDown = useMemo(
    () =>
      langArray.map(([enumType, name]) => (
        <MenuItem key={name} value={enumType}>
          {name}
        </MenuItem>
      )),
    []
  );

  return (
    <>
    {alertText ? <Alert severity="error">{alertText}</Alert> : undefined}
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h6">
          <Link to={routes.landing}>{data[langIndexRoutes.landing]}</Link>
        </Typography>
        <Button color="inherit">
          <Link to={routes.task}>{data[langIndexRoutes['landing.1']]}</Link>
        </Button>
        <Select value={curLan} onChange={handleLanChange}>
          {dropDown}
        </Select>
      </Toolbar>
    </AppBar>
    </>
  );
}
