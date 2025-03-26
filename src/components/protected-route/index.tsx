import { Navigate, Outlet, useLocation } from "react-router"
import { useAppSelector } from "@/store"

export const ProtectedRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const location = useLocation()

  if (isAuthenticated) {
    return <Navigate to="" state={{ from: location }} replace />
  }

  return <Outlet />
}