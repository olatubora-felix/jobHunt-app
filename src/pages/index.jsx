import Showcase from "../components/Showcase";
import TopBanner from "../components/TopBanner";
import JobListings from "../components/jobs/JobListings";
import BottomBanner from "../components/BottomBanner";
import { SearchJob } from "../features/jobs/SearchJob";
import { Link } from "react-router";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { jobListings } from "../constant/jobs/lists";

const Home = () => {
  const job = jobListings?.slice(0, 3);
  return (
    <>
      <Showcase>
        <SearchJob />
      </Showcase>
      <TopBanner />
      <JobListings title={"Recent Jobs"} jobListings={job} />
      <div className="flex justify-center items-center">
        <Link
          to="/app/jobs"
          className=" text-xl text-center flex items-center gap-2"
        >
          <FaArrowAltCircleRight />
          Show All Jobs
        </Link>
      </div>
      <BottomBanner />
    </>
  );
};

export default Home;
