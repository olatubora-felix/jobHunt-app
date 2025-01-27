import { Link, NavLink } from "react-router";
import { FaEdit } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { unProtectedRoute } from "../../constant/navbarRoutes";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prevState) => !prevState);
  const activeLink = ({ isActive }) => ({
    color: isActive ? "active" : "text-white",
  });
  return (
    <header className="bg-blue-900 text-white p-4 sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          <Link to="/">JobHunt</Link>
        </h1>
        <nav>
          <menu className="md:flex items-center gap-4 hidden">
            {unProtectedRoute?.map((route) => (
              <li key={route.id}>
                <NavLink
                  to={route.path}
                  className={` hover:underline ${activeLink}`}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}{" "}
            <li>
              <Link
                to="/app/jobs/create-job"
                className="bg-yellow-500 flex items-center gap-2 hover:bg-yellow-600 text-black px-4 py-2 rounded hover:shadow-md transition duration-300"
              >
                <FaEdit />
                Post a Job
              </Link>
            </li>
          </menu>
          <button className="md:hidden block" onClick={toggle}>
            <IoMdMenu fontSize={24} />
          </button>
        </nav>
      </div>
      {isOpen && (
        <menu className="md:hidden items-center gap-4 flex  flex-col py-10">
          {unProtectedRoute?.map((route) => (
            <li key={route.id}>
              <NavLink
                to={route.path}
                className={` hover:underline ${activeLink}`}
                onClick={toggle}
              >
                {route.name}
              </NavLink>
            </li>
          ))}{" "}
          <li className="flex justify-center items-center">
            <Link
              to="/app/jobs/create-job"
              className="bg-yellow-500 flex items-center gap-2 hover:bg-yellow-600 text-black px-4 py-2 rounded hover:shadow-md transition duration-300"
              onClick={toggle}
            >
              <FaEdit />
              Post a Job
            </Link>
          </li>
        </menu>
      )}
    </header>
  );
};

export default Navbar;
