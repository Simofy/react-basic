import { Table as TableMaterial, Drawer, AppBar, Toolbar, IconButton, Typography, TextField, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useMemo, useCallback, useState } from 'react';
import './style.css';
import EditEntry from './components/EditEntry';

const tableData = [
    [10, "test"],
    [51, "asst"],
    [10, "asst"],
    [10, "asst"],
    [1534, "test"],
    [10, "asst"],
]



export default function Table({
    data,
    handleClick,
}) {
    const [textFieldText, setTextFieldText] = useState("")
    const classes = useMemo(() => makeStyles({
        table: {
            minWidth: 650,
        },
    }), []);
    const handleFilter = useCallback(() => {

    }, [])

    

    const DataParsed = useMemo(() => (data.map(([id, name]) => (
        <TableRow key={id}>
            <button onClick={() => handleClick("random")}>
                <TableCell align="right">{id}</TableCell>
            </button>
            <button onClick={() => handleClick("text")}>
                <TableCell align="right">{name}</TableCell>
            </button>
        </TableRow>
    ))), [data, handleClick]);
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <TextField type="text" onChange={(event) => {
                        const { target: { vale } } = event;
                        setTextFieldText(value);
                    }} />
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
                    <TableBody>
                        {DataParsed}
                    </TableBody>
                </TableMaterial>
            </TableContainer>
        </>
    );
}