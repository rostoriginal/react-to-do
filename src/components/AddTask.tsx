import { useState } from "react";

import AddTaskProps from "../types/AddTaskProps";

export default function AddTask({ addTask }: AddTaskProps) {
  const [title, setTitle] = useState("");
  const [isValid, setIsValid] = useState(false);

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    setIsValid(!!event.target.value.length);
  }

  function handleAddTask(event: React.MouseEvent<HTMLElement>): void {
    event.preventDefault();
    addTask({
      id: new Date().getTime(),
      title,
      done: false,
    });

    setTitle("");
    setIsValid(false);
  }

  return (
    <form className="flex items-center gap-2" id="add-task-form">
      <div className="form-control w-full">
        <input
          type="text"
          placeholder="Enter title.."
          className="input input-bordered w-full bg-white"
          value={title}
          onChange={(e) => handleTitleChange(e)}
        />
      </div>
      <div className="form-control w-[50%] my-4">
        <button
          type="submit"
          form="add-task-form"
          disabled={!isValid}
          className="btn btn-md gap-2 rounded-lg text-[#2869D8] hover:bg-[#DAE7FE] bg-[#E2EBFA] border-none text-md capitalize"
          onClick={handleAddTask}
        >
          Add a task
        </button>
      </div>
    </form>
  );
}
