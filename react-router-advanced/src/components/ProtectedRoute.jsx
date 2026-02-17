import { Navigate } from "react-router-dom";

// Simulate a custom hook
function useAuth() {
  // يمكنك تعديلها لاحقًا للتحقق من تسجيل الدخول الحقيقي
  const user = { loggedIn: true }; // true = مصرح له
  return user && user.loggedIn;
}

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
