import Showcase from "../components/Showcase";
import TopBanner from "../components/TopBanner";
import JobListings from "../components/jobs/JobListings";
import BottomBanner from "../components/BottomBanner";
import { SearchJob } from "../features/jobs/SearchJob";

const Home = () => {
  return (
    <>
      <Showcase>
        <SearchJob />
      </Showcase>
      <TopBanner />
      <JobListings />
      <BottomBanner />
    </>
  );
};

export default Home;
