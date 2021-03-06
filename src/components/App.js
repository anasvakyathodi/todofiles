import React from "react";
import TaskList from "./TaskList";
import "../App.css";
import TaskListContextProvider from "../context/TaskListContext";
const App = () => {
  return (
    <TaskListContextProvider>
      <div>
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
};

export default App;
