import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/home" replace={true} />;
  }

  return children;
};

export default AuthRoute;
