import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages";
import LoginPage from "./pages/auth/login";
import Navbar from "./components/layouts/Navbar";
import RegisterPage from "./pages/auth/register";
import CreateJobPage from "./pages/app/jobs/create-job";
import ProtectedPage from "./routes/protectedRoute";
import JobDetailsPage from "./pages/app/jobs/details";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          {/* Page that doesnt require user login access */}
          <Route index element={<Home />} />
          <Route path="auth">
            <Route index path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          {/* Show Job Details Page */}
          <Route path="/details/:id" element={<JobDetailsPage />} />
          {/* Page that requires login access/protect routes */}
          <Route path="app" element={<ProtectedPage />}>
            <Route path="jobs">
              <Route path="create-job" element={<CreateJobPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
