import TaskProps from "../types/TaskProps";

export default function Task(props: TaskProps) {
  const { task, changeStatus, deleteTask } = props;

  return (
    <div className="flex justify-between items-center shadow-xl p-4 bg-white rounded-lg">
      <div className="max-w-[90%]">
        <h3
          className={`font-bold truncate text-black ${
            task.done ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </h3>
      </div>
      <div className="actions flex">
        <input
          defaultChecked={task.done}
          onChange={(event) =>
            changeStatus({
              id: task.id,
              done: event.target.checked,
            })
          }
          type="checkbox"
          className="checkbox checkbox-md rounded-full"
        />
        <button
          onClick={() => deleteTask(task.id)}
          className="ml-2 btn btn-xs btn-circle text-white btn-error"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
