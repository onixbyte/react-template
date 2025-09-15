import { Outlet } from "react-router-dom"

/**
 * Empty layout component that provides minimal structure.
 * Useful for pages that need full control over their layout.
 */
export default function EmptyLayout() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  )
}