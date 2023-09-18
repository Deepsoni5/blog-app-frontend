import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-3 bg-white flex justify-center items-center shadow-md gap-10 font-medium text-xl">
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
    </nav>
  );
};

export default Navbar;
