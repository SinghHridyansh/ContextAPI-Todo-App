import React from "react";
import { useTasks } from "./TodosLogic";
import TodoItem from "./Todoitem";

const TodoList = () => {
  const { tasks } = useTasks();

  return (
    <div className="tasklist">
      <table>
        <tbody>
          {tasks.map((tasks, i) => (
            <TodoItem key={i} {...tasks} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
