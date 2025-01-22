import Showcase from "../components/Showcase";
import TopBanner from "../components/TopBanner";
import JobListings from "../components/jobs/JobListings";
import BottomBanner from "../components/BottomBanner";

const Home = () => {
  return (
    <>
      <Showcase />
      <TopBanner />
      <JobListings />
      <BottomBanner />
    </>
  );
};

export default Home;
