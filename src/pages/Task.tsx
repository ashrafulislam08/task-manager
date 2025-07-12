import { selectTasks } from "@/redux/features/todoSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return <div>Task</div>;
};

export default Task;
