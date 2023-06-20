import Task from "./Task";

interface TaskProps {
  task: Task;
  changeStatus: (task: { id: number; done: boolean }) => void;
  deleteTask: (id: number) => void;
}

export default TaskProps;
