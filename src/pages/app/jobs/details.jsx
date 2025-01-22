import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { jobListings } from "../../../constant/jobs/lists";

const JobDetailsPage = () => {
  const params = useParams();
  console.log(params);
  const jobDetails = jobListings?.find((job) => job?.id === params?.id);
  console.log(jobDetails);
  return (
    <>
      <section className="container mx-auto p-4 mt-4">
        <div className="rounded-lg shadow-md bg-white p-3">
          <div className="flex justify-between items-center">
            <Link className=" p-4 text-blue-700 flex items-center gap-2" to="/">
              <FaArrowAltCircleLeft />
              Back To Listings
            </Link>
            <div className="flex space-x-4 ml-4">
              <a
                href="/edit"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Edit
              </a>
              {/* <!-- Delete Form --> */}
              <form method="POST">
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </form>
              {/* <!-- End Delete Form --> */}
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">{jobDetails?.title}</h2>
            <p className="text-gray-700 text-lg mt-2">
              {jobDetails?.description}
            </p>
            <ul className="my-4 bg-gray-100 p-4">
              <li className="mb-2">
                <strong>Salary:</strong> ${jobDetails?.salary}
              </li>
              <li className="mb-2">
                <strong>Location:</strong>{" "}
                {`${jobDetails?.city} ${jobDetails?.state}`}
                <span className="text-xs bg-blue-500 text-white rounded-full px-2 py-1 ml-2">
                  Local
                </span>
              </li>
              <li className="mb-2">
                <strong>Tags:</strong>{" "}
                {jobDetails?.tags?.map((tag) => (
                  <span key={tag} className="mx-1 capitalize">
                    {tag}
                  </span>
                ))}{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Job Details</h2>
        <div className="rounded-lg shadow-md bg-white p-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-500">
            Job Requirements
          </h3>
          <p>{jobDetails?.requirements}</p>
          <h3 className="text-lg font-semibold mt-4 mb-2 text-blue-500">
            Benefits
          </h3>
          <p>{jobDetails?.benefits}</p>
        </div>
        <p className="my-5">
          Put &quot;Job Application&quot; as the subject of your email and
          attach your resume.
        </p>
        <a
          href="mailto:manager@company.com"
          className="block w-full text-center px-5 py-2.5 shadow-sm rounded border text-base font-medium cursor-pointer text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
        >
          Apply Now
        </a>
      </section>
    </>
  );
};

export default JobDetailsPage;
