import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white bg-opacity-95 p-5 w-full h-full rounded-lg space-y-3">
          {todos.map((todo) => {
            return <TodoCard todo={todo}></TodoCard>
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
