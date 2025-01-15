import BottomBanner from "./components/BottomBanner";
import JobListings from "./components/jobs/JobListings";
import Navbar from "./components/layouts/Navbar";
import Showcase from "./components/Showcase";
import TopBanner from "./components/TopBanner";
const App = () => {
  return (
    <>
      <Navbar />
      <Showcase />
      <TopBanner />
      <JobListings />
      <BottomBanner />
    </>
  );
};

export default App;
