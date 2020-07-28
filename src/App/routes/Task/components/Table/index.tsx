import {
  AppBar,
  Button,
  Table as TableMaterial,
  TextField,
  Toolbar,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useCallback, useMemo, useState } from 'react';
import './style.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function Table({
  data,
  handleClick,
}: {
  data: (string | number)[][];
  handleClick: Function;
}) {
  const [, setTextFieldText] = useState('asd');
  const classes = useStyles();
  const handleFilter = useCallback(() => {}, []);

  const DataParsed = useMemo(
    () =>
      data.map(([id, name], index) => (
        <TableRow key={`${index}_${name}`}>
            <TableCell align="right" onClick={() => handleClick('random')}>{id}</TableCell>
            <TableCell onClick={() => handleClick('text')} align="right">{name}</TableCell>
        </TableRow>
      )),
    [data, handleClick]
  );
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <TextField
            type="text"
            onChange={(event) => {
              const {
                target: { value },
              } = event;
              setTextFieldText(value);
            }}
          />
          <Button color="inherit" onClick={handleFilter}>
            Search
          </Button>
        </Toolbar>
      </AppBar>
      <TableContainer component={Paper}>
        <TableMaterial className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Random</TableCell>
              <TableCell align="right">Text</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{DataParsed}</TableBody>
        </TableMaterial>
      </TableContainer>
    </>
  );
}
