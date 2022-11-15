import axios from "axios";
import React from "react";

const Login = () => {
  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const loginCredentials = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const res = await axios
      .post("http://localhost:8000/api/login", loginCredentials)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    // window.axios.post(`http://localhost:8000/api/login`);
  };

  return (
    <div className="flex  mx-auto px-4 sm:px-6 h-screen items-center justify-center py-12 lg:py-20 bg-rose-200">
      <form onSubmit={handleClick}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="text"
          name="password"
          placeholder="password"
          id="password"
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
