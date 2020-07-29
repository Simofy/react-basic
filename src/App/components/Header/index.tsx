import Select from '@material-ui/core/Select';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  MenuItem,
} from '@material-ui/core';
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
  const { onLanguageChange, data, initLang } = useContext(LanContext);
  const [curLan, setCurLan] = useState<langEnum>(langEnum.EN);

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
  );
}
