import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider as ReduxProvider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { RouterProvider } from "react-router-dom"
import "@/init"
import store, { persistor } from "@/store"
import router from "@/router"
import "./index.css"

/**
 * Main application entry point.
 * Sets up the React app with Redux store and React Router.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RouterProvider router={router} />
      </PersistGate>
    </ReduxProvider>
  </StrictMode>,
)
