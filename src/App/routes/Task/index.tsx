import { Drawer } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import EditEntry from './components/EditEntry';
import Table from './components/Table';
import './style.css';
import TaskContext from './TaskContext';

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

  return (
    <TaskContext.Provider
      value={{
        applyFilters: () => {},
      }}
    >
      <div className="task">
        <Table data={tableData} handleClick={handleTableClick} />
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
