import { Link, NavLink } from "react-router";
import { FaEdit } from "react-icons/fa";
import { unProtectedRoute } from "../../constant/navbarRoutes";
const Navbar = () => {
  const activeLink = ({ isActive }) => ({
    color: isActive ? "active" : "text-white",
  });
  return (
    <header className="bg-blue-900 text-white p-4 sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          <Link to="/">JobHunt</Link>
        </h1>
        <nav className="flex items-center gap-4">
          {unProtectedRoute?.map((route) => (
            <NavLink
              to={route.path}
              className={` hover:underline ${activeLink}`}
              key={route.id}
            >
              {route.name}
            </NavLink>
          ))}{" "}
          <Link
            to="/app/jobs/create-job"
            className="bg-yellow-500 flex items-center gap-2 hover:bg-yellow-600 text-black px-4 py-2 rounded hover:shadow-md transition duration-300"
          >
            <FaEdit />
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
