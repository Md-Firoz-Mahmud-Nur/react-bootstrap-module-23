import Logo from "@/assets/Logo";
import { Link } from "react-router";
import { ModeToggle } from "../ModeToggle";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <Link to="/" className="flex items-center">
        <Logo /> <span className="font-bold ml-2">Task</span>Master
      </Link>
      <Link className="hover:underline" to="/tasks">
        Tasks
      </Link>
      <Link className="hover:underline" to="/user">
        User
      </Link>
      <Link className="hover:underline" to="/counter">
        Counter
      </Link>
      <Link className="hover:underline" to="/demoButton">
        Demo Button
      </Link>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
