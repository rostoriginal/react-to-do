import ITask from "../types/Task";
import Task from "./Task";

export default function TasksList(props: { tasks: ITask[]; setTasks: any }) {
  function onChangeStatus({ id, done }: { id: number; done: boolean }) {
    const updateList = props.tasks.map((task: ITask) => ({
      ...task,
      done: task.id === id ? done : task.done,
    }));

    props.setTasks(updateList);
  }

  function onDeleteTask(id: number) {
    const updateList = props.tasks.filter((task: ITask) => task.id !== id);

    props.setTasks(updateList);
  }

  return (
    <div className="flex flex-col gap-4 my-4">
      {props.tasks.map((task: ITask) => {
        return (
          <Task
            key={task.id}
            task={task}
            changeStatus={onChangeStatus}
            deleteTask={onDeleteTask}
          />
        );
      })}
    </div>
  );
}
