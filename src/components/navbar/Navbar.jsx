import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-7 border-b px-16 items-center">
      <div>
        <Link to="/" className="font-semibold text-lg">
          Apprentice
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/sign-up" className="underliner underliner-color">
          Sign Up
        </Link>
        <Link to="/sign-in" className="underliner underliner-color">
          Sign in
        </Link>
        <Link to="/portfolio" className="underliner underliner-color">
          Portfolio
        </Link>
        <Link to="/discover" className="underliner underliner-color">
          Discover
        </Link>
        <Link to="/app-status" className="underliner underliner-color">
          Application Status
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
