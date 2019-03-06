import React from "react";

const Task = ({ checked, color, children }) => {
  return (
    <div className="task" style={{ borderColor: color }}>
      <label>
        <input type="checkbox" checked={checked} />
      </label>
      {children}
    </div>
  );
};

export default Task;
