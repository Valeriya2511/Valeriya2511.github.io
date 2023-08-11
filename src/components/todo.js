import { useState } from "react";

export function Todo({ todo }) {
  const [checked, setChecked] = useState(todo.complited);
  return (
    <li className='flex justify-between border px-4 py-2  max-w-xs w-full mb-2'>
      <input className='mr-2' type='checkbox' checked={checked} onChange={() => setChecked(!checked)}></input>
      {todo.title}
      <button className='pointer hover:text-blue-300' type='button'>
        Remove
      </button>
    </li>
  );
}
