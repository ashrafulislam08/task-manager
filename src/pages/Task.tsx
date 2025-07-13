import { selectTasks } from "@/redux/features/todoSlice";
import { useAppSelector } from "@/redux/hook";
import Container from "@/components/ui/container";
import TaskCard from "@/components/module/tasks/TaskCard";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return (
    <Container className="mt-20">
      <div>
        <h1>Tasks</h1>
      </div>

      <div className="space-y-5 ">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </Container>
  );
};

export default Task;
