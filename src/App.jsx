import "./App.css";
import { Provider } from "react-redux";
import Profile from "./components/Profile";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./store/userSlice";

//store
const store = configureStore({
  //reducer key 要放一個 reducer(function),可以操作改變 state
  reducer: {
    //key:value
    user: userSlice,
  },
});

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Profile />
        </div>
      </Provider>
    </>
  );
}

export default App;
