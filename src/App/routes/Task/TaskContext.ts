import { createContext } from 'react';

const TaskContext = createContext<{
  applyFilters: () => void;
    }>({
      applyFilters: () => undefined,
    });

export default TaskContext;
