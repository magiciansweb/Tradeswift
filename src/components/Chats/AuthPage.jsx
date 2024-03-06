"use client";

import UseAxios from "../Hooks/UseAxios";



const AuthPage = (props) => {
  const axios=UseAxios();
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios.post("/authenticate", { username: value })
      .then((res) => props.onAuth({ ...res.data, secret: value }))
      .catch((e) => console.log("error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="w-[50%] mx-auto">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
