import React, { createContext, useState } from "react";
export const TaskListContext = createContext();
const TaskListProvider = (props) => {
  const [tasks, setTasks] = useState([
    { task: "read books", id: 1 },
    { task: "do programming", id: 2 },
    { task: "play ludoku", id: 3 },
    { task: "sleep deeply", id: 4 },
  ]);
  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
