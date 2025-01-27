import { Link } from "react-router";

/* eslint-disable react/prop-types */
const JobItems = ({ title, description, salary, tags, city, state, id }) => {
  return (
    <div className="rounded-lg shadow-md bg-white  space-y-4">
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 text-lg mt-2">{description}</p>
        <ul className="my-4 bg-gray-100 p-4 rounded">
          <li className="mb-2">
            <strong>Salary:</strong> ${salary}
          </li>
          <li className="mb-2">
            <strong>Location:</strong> {`${city}, ${state}`}
            <span className="text-xs bg-blue-500 text-white rounded-full px-2 py-1 ml-2">
              Local
            </span>
          </li>
          <li className="mb-2">
            <strong>Tags:</strong>{" "}
            {tags.map((tag) => (
              <span key={tag} className="mx-1 capitalize">
                {tag}
              </span>
            ))}{" "}
          </li>
        </ul>
        <Link
          to={`/details/${id}`}
          className="block w-full text-center px-5 py-2.5 shadow-sm rounded border text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default JobItems;
