import React, { useState } from "react";
import "./App.css";

import Task from "./types/Task";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  function handleAddTask(task: Task): void {
    setTasks([task, ...tasks]);
  }

  return (
    <>
      <div className="bg-white w-[410px] min-h-[680px] mx-auto mt-20 rounded-3xl px-3 py-3">
        <AddTask addTask={handleAddTask} />
        <div className="bg-[#F9F9F9] w-full h-[680px] rounded-3xl p-4 overflow-scroll">
          <TasksList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </>
  );
}

export default App;
