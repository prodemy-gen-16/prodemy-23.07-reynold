import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {
    id: "",
    email: "",
    username: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: { ...initialState },
  reducers: {
    setToken(state, action) {
      const token = action.payload;
      state.token = token;
    },
    setUser(state, action) {
      const { id, email, username } = action.payload;
      state.user.id = id;
      state.user.email = email;
      state.user.username = username;
    },
    resetAuthData() {
      return { ...initialState };
    },
  },
});

export const { setToken, setUser, resetAuthData } = authSlice.actions;
export default authSlice.reducer;
