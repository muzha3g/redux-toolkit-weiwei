import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: "",
    age: 0,
    email: "",
    login: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  //reducer 是一個函式，會自帶兩個參數，state 跟 action
  reducers: {
    setLogin(state, action) {
      //action.payload=傳進來的參數
      const { name, age, email } = action.payload;
      state.profile = {
        name,
        age,
        email,
        login: true,
      };
    },
    setLogout(state) {
      state.profile = { ...initialState.profile };
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
