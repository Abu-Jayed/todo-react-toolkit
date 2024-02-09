const TodoCard = () => {
  return (
    <div className="border flex justify-between items-center bg-white p-5 rounded-lg w-full h-full">
      <input type="checkbox" name="" id="" />
      <p>Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="flex gap-4">
        <button>Del</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
