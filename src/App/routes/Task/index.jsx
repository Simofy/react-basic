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
import Table from './components/Table';
import TaskContext from './TaskContext';

const tableData = [
    [10, "test"],
    [51, "asst"],
    [10, "asst"],
    [10, "asst"],
    [1534, "test"],
    [10, "asst"],
]


export default function Task({

}) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [state, setState] = useState('text');

    const handleTableClick = useCallback((state) => {
        setState(state);
        setDrawerOpen(true);
    }, []);

    return <TaskContext.Provider data={{
        
    }}><div className="task">
        <Table data={tableData} handleClick={handleTableClick} />
        <Drawer
            onClose={() => setDrawerOpen(false)}
            anchor="right"
            open={drawerOpen}>
            <div style={{
                width: "400px",
                background: "#faf"
            }}>
                <EditEntry state={state} />
            </div>
        </Drawer>
    </div>
    </TaskContext.Provider>
}