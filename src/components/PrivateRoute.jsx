// PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/booksnap-authentication" />;
};

export default PrivateRoute;
