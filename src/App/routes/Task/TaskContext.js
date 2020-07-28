const { createContext } = require("react");

const TaskContext = createContext({
    applyFilters: () => {},
});

export default TaskContext