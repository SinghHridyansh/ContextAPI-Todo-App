import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

const Todoslogic = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTasks = (ts) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        task: ts,
        complete: false,
      },
    ]);
  };

  const isDone = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, complete: status } : t)));
  };

  const deleteTasks = (id) => {
    setTasks(tasks.filter((ts) => ts.id !== id));
  };

  const updateTask = (id, data) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, task: data } : t)));
  };

  return (
    <div>
      <TaskContext.Provider
        value={{ tasks, addTasks, isDone, deleteTasks, updateTask }}
      >
        {children}
      </TaskContext.Provider>
    </div>
  );
};

export default Todoslogic;
