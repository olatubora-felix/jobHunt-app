/* eslint-disable react/prop-types */
import { Link } from "react-router";

const CardLayout = ({ children, title, link }) => {
  return (
    <section className="flex justify-center items-center mt-20">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-500 mx-6">
        <h2 className="text-4xl text-center font-bold mb-4">{title}</h2>
        <div>
          {children}
          {link && (
            <p className="mt-4 text-gray-500">
              {link.text}{" "}
              <Link to={link.to} className="text-blue-900">
                {link.subText}
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CardLayout;