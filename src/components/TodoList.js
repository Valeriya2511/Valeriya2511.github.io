import { Todo } from './todo';
export function TodoList({ todos }) {
  return (
    <ul className="max-w-xs w-full">
      {todos.map(todo => (
        <Todo todo={todo} {...todo} key={todo.id} />
      ))}
    </ul>
  );
}
