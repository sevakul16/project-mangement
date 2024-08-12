import React from "react";
import Input from "./Input";

const NewProject = () => {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" isTextarea />
        <Input label="Due date" />
      </div>
    </div>
  );
};

export default NewProject;
