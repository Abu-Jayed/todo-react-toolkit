import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // * from Local State
  // const { todos } = useAppSelector((state) => state.todos);

  // from server
  const {data:todos,isLoading, isError, isSuccess} = useGetTodosQuery(undefined)

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
        <div className="bg-white bg-opacity-95 p-5 w-full h-full rounded-lg space-y-3">
          {todos.data.map((todo) => {
            return <TodoCard todo={todo}></TodoCard>
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
