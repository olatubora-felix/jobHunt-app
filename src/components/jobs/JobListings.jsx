import JobItems from "./JobItems";
import { jobListings } from "../../constant/jobs";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router";
const JobListings = () => {
  return (
    <section>
      <div className="container mx-auto p-4 mt-4">
        <div className="text-center text-3xl mb-4 font-bold border border-gray-300 p-3">
          Recent Jobs
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {jobListings?.map((job, index) => (
            <JobItems key={`${job.id}-${index}`} {...job} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          to="jobs"
          className=" text-xl text-center flex items-center gap-2"
        >
          <FaArrowAltCircleRight />
          Show All Jobs
        </Link>
      </div>
    </section>
  );
};

export default JobListings;
