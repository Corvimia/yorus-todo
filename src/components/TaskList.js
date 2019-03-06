import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task checked={task.checked} color={task.color}>
          {task.text}
        </Task>
      ))}
    </div>
  );
};

export default TaskList;
