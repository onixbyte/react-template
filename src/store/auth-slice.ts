import { createSlice } from "@reduxjs/toolkit"

interface AuthState {
  isAuthenticated: boolean
}

const initialState: AuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  }
})

// export const {  } = authSlice.actions
export default authSlice.reducer