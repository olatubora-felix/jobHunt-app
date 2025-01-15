import JobItems from "./JobItems";
import { jobListings } from "../../constant/jobs";
const JobListings = () => {
  return (
    <section>
      <div className="container mx-auto p-4 mt-4">
        <div className="text-center text-3xl mb-4 font-bold border border-gray-300 p-3">
          Recent Jobs
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {jobListings?.map((job) => (
            <JobItems key={job.id} {...job} />
          ))}
        </div>
      </div>
      <a href="listings.html" className="block text-xl text-center">
        <i className="fa fa-arrow-alt-circle-right"></i>
        Show All Jobs
      </a>
    </section>
  );
};

export default JobListings;
