import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute: React.FC = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
