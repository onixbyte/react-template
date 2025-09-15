/**
 * About page component that displays information about the application.
 */
export default function About() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          About This Template
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn more about the technologies and architecture behind this React Router template.
        </p>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Technology Stack */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Technology Stack
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-gray-700"><strong>React 19</strong> - Latest version with modern features</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-gray-700"><strong>TypeScript</strong> - Type-safe development</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-gray-700"><strong>React Router v7</strong> - Client-side routing</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-gray-700"><strong>Tailwind CSS</strong> - Utility-first styling</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-gray-700"><strong>Redux Toolkit</strong> - State management</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              <span className="text-gray-700"><strong>Vite</strong> - Fast build tool and dev server</span>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Key Features
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Modern React Router implementation</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Protected routes with authentication</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Error boundary and error pages</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700">Responsive design with Tailwind</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700">TypeScript for type safety</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-gray-700">ESLint and Prettier configuration</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Architecture Overview */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Architecture Overview
        </h2>
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            This template follows modern React development practices with a clear separation of concerns:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Components:</strong> Reusable UI components organised by feature</li>
            <li><strong>Pages:</strong> Route-level components that represent different views</li>
            <li><strong>Layouts:</strong> Wrapper components that provide consistent structure</li>
            <li><strong>Store:</strong> Redux Toolkit slices for state management</li>
            <li><strong>Router:</strong> Centralised routing configuration</li>
          </ul>
          <p>
            The routing system uses React Router&apos;s latest data router approach with <code>createBrowserRouter</code>,
            providing better performance and developer experience compared to the legacy BrowserRouter approach.
          </p>
        </div>
      </div>
    </div>
  )
}