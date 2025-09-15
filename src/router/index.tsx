import { createBrowserRouter } from "react-router-dom"
import App from "@/App"
import ErrorPage from "@/components/error-page"
import HomePage from "@/page/home"
import AboutPage from "@/page/about"
import ContactPage from "@/page/contact"

/**
 * Main application router configuration using React Router v6.
 * Defines all routes and their corresponding components.
 */
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
)

export default router
