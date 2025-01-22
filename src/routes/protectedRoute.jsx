import { Navigate, Outlet } from "react-router";

const ProtectedPage = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to={"/auth/login"} replace />;
};

export default ProtectedPage;
