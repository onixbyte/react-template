import { useRouteError, Link } from "react-router-dom"

/**
 * Error page component that displays when routing errors occur.
 * Uses React Router's useRouteError hook to get error information.
 */
export default function ErrorPage() {
  const error = useRouteError() as Error & { statusText?: string; status?: number }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            {/* Error Icon */}
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            {/* Error Title */}
            <h1 className="mt-4 text-2xl font-bold text-gray-900">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                {error?.statusText ?? error?.message ?? "An unexpected error occurred"}
              </p>
              {error?.status && (
                <p className="text-xs text-gray-500 mt-1">
                  Error Code: {error.status}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col space-y-3">
              <Link
                to="/"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Go back home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}