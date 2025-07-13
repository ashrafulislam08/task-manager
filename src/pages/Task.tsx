import { selectTasks } from "@/redux/features/todoSlice";
import { useAppSelector } from "@/redux/hook";
import Container from "@/components/ui/container";
import TaskCard from "@/components/module/tasks/TaskCard";
import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return (
    <Container className="mt-20">
      <div className="flex items-center justify-between my-5">
        <h1>Tasks</h1>
        <AddTaskModal />
      </div>

      <div className="space-y-5 ">
        {tasks.map((task, idx) => (
          <TaskCard key={idx} task={task} />
        ))}
      </div>
    </Container>
  );
};

export default Task;
