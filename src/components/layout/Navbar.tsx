import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3 px-5">
      <Link to="/">
        <div className="flex items-center cursor-pointer">
          <Logo />
          <span className="font-bold ml-2 ">Task</span>Manager
        </div>
      </Link>
      <div className="flex items-center gap-1 font-semibold">
        <Link to="/users">User</Link>
        <Link to="/tasks">Task</Link>
      </div>
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
