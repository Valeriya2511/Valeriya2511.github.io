import { useState } from "react";
import { TodoList } from "../components/TodoList";

export function TodoPage() {
  const [todos, setTodo] = useState([
    { id: 1, title: "Todo1", complited: false },
    { id: 2, title: "Todo2", complited: false },
  ]);
  const [todoTitle, setTodoTitle] = useState("");

  const addTodo = (event) => {
    if (event.key === "Enter") {
      setTodo([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          complited: false,
        },
      ]);
      setTodoTitle("");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Todo App</h1>

      <div className="flex flex-col gap-4 justify-center items-center">
        <div>
          <label className="mr-2">Add new todo:</label>

          <input
            className="border max-w-xs w-full px-4 py-2"
            type="text"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyPress={addTodo}
          />
        </div>

        <TodoList todos={todos} />
      </div>
    </div>
  );
}
