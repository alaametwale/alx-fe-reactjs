import { Navigate } from "react-router-dom";

const isAuthenticated = true; // Simulate authentication

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
