import React, { useRef } from "react";
import { useDispatch } from "react-redux"; //useDispatch 可以取得在 redux store 定義的函式
import { setLogin } from "../store/userSlice";

const NotLogin = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();

  const handleLogin = () => {
    const nameValue = nameRef.current.value;
    const ageValue = ageRef.current.value;
    const emailValue = emailRef.current.value;

    dispatch(
      setLogin({
        name: nameValue,
        age: ageValue,
        email: emailValue,
      })
    );
  };
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" ref={nameRef} />
      <br />
      <label htmlFor="age">Age:</label>
      <input type="text" name="age" id="age" ref={ageRef} />
      <br />
      <label htmlFor="age">Email:</label>
      <input type="text" name="email" id="email" ref={emailRef} />
      <br />
      <button onClick={handleLogin}>Login</button>
      <hr />
    </div>
  );
};

export default NotLogin;
