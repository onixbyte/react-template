import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import authReducer from "./auth-slice.ts"

/**
 * The Redux store instance for the application.
 *
 * This store is configured using [`configureStore`](https://redux-toolkit.js.org/api/configureStore)
 * from <code>@reduxjs/toolkit</code>. It combines various slice reducers into
 * a single root redux.
 */
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
