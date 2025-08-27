import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


const AuthRedirect = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>
  }

  if (isAuthenticated) {
    return <Navigate to="/my-games" replace />;
  }

  return children;
};

export default AuthRedirect;