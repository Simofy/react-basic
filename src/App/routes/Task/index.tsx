import { Button, Drawer } from '@material-ui/core';
import React, { useCallback, useState, useContext } from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { routes, taskRoutes } from '../../../const/routes';
import EditEntry from './components/EditEntry';
import Table from './components/Table';
import './style.css';
import TaskContext from './TaskContext';
import { LanContext } from '../../LanContext';

const tableData = [
  [10, 'test'],
  [51, 'asst'],
  [10, 'asst'],
  [10, 'asst'],
  [1534, 'test'],
  [10, 'asst'],
];

export default function Task() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [state, setState] = useState('text');

  const handleTableClick = useCallback((state) => {
    setState(state);
    setDrawerOpen(true);
  }, []);

  const history = useHistory();


  return (
    <TaskContext.Provider
      value={{
        applyFilters: () => null,
      }}
    >
      <div className="task">
        <Button onClick={() => history.push(taskRoutes.table)}>Table</Button>
        <Button onClick={() => history.push(taskRoutes.create)}>Create</Button>
        <Button onClick={() => history.push(taskRoutes.update)}>Update</Button>
        <Switch>
          <Route path={taskRoutes.table}>
            <Table data={tableData} handleClick={handleTableClick} />
          </Route>
          <Route path={taskRoutes.create}>
            <div className="demo-1">

            </div>
          </Route>
          <Route path={taskRoutes.update}>
            <div className="demo-2">

            </div>
          </Route>
          <Route path={routes.task}>
            <></>
          </Route>
        </Switch>
        <Drawer
          onClose={() => setDrawerOpen(false)}
          anchor="right"
          open={drawerOpen}
        >
          <div
            style={{
              width: '400px',
              background: '#faf',
            }}
          >
            <EditEntry state={state} />
          </div>
        </Drawer>
      </div>
    </TaskContext.Provider>
  );
}
