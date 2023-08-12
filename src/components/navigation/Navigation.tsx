import { Link } from 'react-router-dom';
export function Navigation() {
  return (
    <nav className="flex justify-center items-center gap-4 py-2 bg-gray-400">
      <p>Navigation: </p>
      <Link className="border px-4 py-2 hover:bg-orange-400" to={'/'}>
        Products
      </Link>
      <Link className="border px-4 py-2 hover:bg-orange-400" to={'/about'}>
        About
      </Link>
      <Link className="border px-4 py-2 hover:bg-orange-400" to={'/todo'}>
        Todo
      </Link>
    </nav>
  );
}
