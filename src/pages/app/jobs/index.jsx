import JobListings from "../../../components/jobs/JobListings";
import TopBanner from "../../../components/TopBanner";
import { CustomSearch } from "../../../components/ui/CustomSearch";
import { jobListings } from "../../../constant/jobs/lists";

const JobsPage = () => {
  return (
    <>
      <TopBanner />
      <section>
        <div className="container mx-auto p-4 mt-4">
          <CustomSearch />
          <JobListings title={"All Jobs"} jobListings={jobListings} />
        </div>
      </section>
    </>
  );
};

export default JobsPage;
