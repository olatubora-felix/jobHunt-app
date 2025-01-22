/* eslint-disable react/prop-types */
import { Link } from "react-router";

const AuthLayout = ({ children, title, subTitle, link }) => {
  return (
    <section className="flex justify-center items-center mt-20">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-500 mx-6">
        <h2 className="text-4xl text-center font-bold mb-4">{title}</h2>
        <div>
          {children}
          <p className="mt-4 text-gray-500">
            {subTitle}{" "}
            <Link to={link.to} className="text-blue-900">
              {link.text}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
