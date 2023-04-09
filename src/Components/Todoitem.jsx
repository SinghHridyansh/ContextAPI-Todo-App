import React, { useState } from "react";
import "../Components/Task.css";
import { useTasks } from "./TodosLogic";
import { FaTrashAlt, FaPencilAlt, FaPlus } from "react-icons/fa";

const TodoItem = ({ id, task, complete }) => {
  const { isDone, deleteTasks, updateTask } = useTasks();
  const [toggle, settogle] = useState(false);
  const checkTask = (e) => isDone(id, e.target.checked);
  const [updatevalue, setupdatevalue] = useState(task);
  const editTask = () => {
    updateTask(id, updatevalue);
    settogle(!toggle);
  };
  //   const removeTask = () => deleteTasks(id);

  return (
    <div className="task">
      <div className={!toggle ? "show-edit" : ""}>
        <input
          type="text"
          value={updatevalue}
          onChange={(e) => setupdatevalue(e.target.value)}
        />
        <button onClick={editTask}>Update</button>
      </div>
      <tr>
        <td className="checkbox">
          <input type="checkbox" onChange={checkTask} />
        </td>
        <td className="taskname">
          <span className={complete ? "task-complete" : "task-incomplete"}>
            {task}
          </span>
        </td>
        <td className="edit">
          <FaPencilAlt onClick={() => settogle(!toggle)} />
        </td>
        <td className="delete">
          <FaTrashAlt onClick={() => deleteTasks(id)} />
        </td>
      </tr>
    </div>
  );
};

export default TodoItem;
