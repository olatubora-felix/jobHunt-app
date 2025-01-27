/* eslint-disable react/prop-types */
import JobItems from "./JobItems";
const JobListings = ({ title, jobListings }) => {
  return (
    <section>
      <div className="container mx-auto p-4 mt-4">
        <div className="text-center text-3xl mb-4 font-bold border border-gray-300 p-3">
          {title}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {jobListings?.map((job, index) => (
            <JobItems key={`${job.id}-${index}`} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
