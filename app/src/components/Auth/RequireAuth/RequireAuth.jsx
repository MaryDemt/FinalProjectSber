import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const personToken = 'personToken'

export function RequireAuth({ children }) {
  let token = useSelector((store) => store.person.token);
  if (!token) {
    token = localStorage.getItem(personToken)

  }
  const location = useLocation()

  if (!token) {
    return <Navigate to="/signin" state={{ from: location }} replace />
  }
  return children
}