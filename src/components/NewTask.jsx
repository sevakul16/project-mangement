import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [eneteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (eneteredTask.trim().length === 0) {
      return;
    }
    onAdd(eneteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={eneteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add taks
      </button>
    </div>
  );
};

export default NewTask;
