import { Navigate, Outlet, useLocation } from "react-router"
import { useAppSelector } from "@/store"

/**
 * Renders child routes if the user is unauthenticated, otherwise redirects authenticated users to
 * the root path.
 *
 * This component's logic allows unauthenticated users to access nested routes rendered
 * via `Outlet`. Conversely, if a user is authenticated, they are redirected to the application's
 * root path (`""`). This behaviour is inverse to the typical implementation of a 'protected route',
 * which usually grants access to authenticated users and redirects unauthenticated users to a
 * login page.
 */
export default function ProtectedRoute() {
  /**
   * Retrieves the authentication status from the Redux store.
   */
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  /**
   * Retrieves the current location object from React Router.
   */
  const location = useLocation()

  if (isAuthenticated) {
    /**
     * Redirects authenticated users to the application's root path (`""`).
     *
     * The redirection includes the current location's state, allowing the
     * target route to know where the user was redirected from. The
     * `replace` prop ensures the current history entry is replaced.
     */
    return <Navigate to="" state={{ from: location }} replace />
  }

  /**
   * Renders the child routes if the user is unauthenticated.
   */
  return <Outlet />
}
