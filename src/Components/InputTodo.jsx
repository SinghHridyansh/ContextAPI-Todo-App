import { React, useState } from "react";
import { useTasks } from "./TodosLogic";
import { FaPlus } from "react-icons/fa";

const InputTodo = () => {
  const [task, setTask] = useState("");
  const { addTasks } = useTasks();

  const handlesubmit = (e) => {
    e.preventDefault();
    addTasks(task);
    setTask("");
  };

  return (
    <form>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <div className="addplus">
        <FaPlus onClick={handlesubmit} />
      </div>
    </form>
  );
};

export default InputTodo;
