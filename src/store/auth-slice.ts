import { createSlice } from "@reduxjs/toolkit"

/**
 * Defines the structure of the authentication state within the Redux store.
 */
interface AuthState {
  /**
   * Indicates whether a user is currently authenticated.
   * @type {boolean}
   */
  isAuthenticated: boolean
}

/**
 * The initial state for the authentication slice.
 *
 * By default, the user is considered unauthenticated.
 *
 * @constant
 * @type {AuthState}
 */
const initialState: AuthState = {
  isAuthenticated: false
}

/**
 * A Redux Toolkit slice for managing authentication-related state.
 *
 * This slice includes the reducer, actions, and initial state for the authentication feature.
 * Currently, it only defines the initial state and no specific reducers, meaning it only
 * holds the `isAuthenticated` flag.
 */
const authSlice = createSlice({
  /**
   * The name of the slice, used to generate action types.
   * @type {string}
   */
  name: "auth",
  /**
   * The initial state for this slice.
   * @type {AuthState}
   */
  initialState,
  /**
   * An object of reducer functions. Currently empty, meaning no actions are explicitly defined for
   * state modification within this slice.
   * @type {object}
   */
  reducers: {

  }
})

// export const {  } = authSlice.actions

/**
 * The reducer function for the authentication slice.
 *
 * This is the default export and should be combined with other reducers in the Redux store.
 *
 * @default
 */
export default authSlice.reducer