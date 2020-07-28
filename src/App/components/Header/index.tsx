import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../const/routes';
export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h6">
          <Link to={routes.landing}>Home</Link>
        </Typography>
        <Button color="inherit">
          <Link to={routes.task}>Task</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
