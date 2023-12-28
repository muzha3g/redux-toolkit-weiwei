import React from "react";
import Login from "./Login";
import NotLogin from "./NotLogin";
import { useSelector } from "react-redux"; //useSelector 可以取得在 redux 中定義的 state

const Profile = () => {
  const state = useSelector((state) => state.user);
  console.log(state);
  return (
    <div style={{ marginTop: "50px" }}>
      {state.profile.login ? <Login /> : <NotLogin />}
    </div>
  );
};

export default Profile;
