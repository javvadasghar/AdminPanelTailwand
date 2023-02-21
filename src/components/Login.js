import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [errormsg, seterrormsg] = useState("");

  const loginCredentials = [
    {
      email: "jawad.asghar@outlook.com",
      password: "Abcd@1234",
      user_type: "admin",
    },
    {
      email: "jamsheed@gmail.com",
      password: "Abcd@1234",
      user_type: "normal",
      application: "app1",
    },
    {
      email: "hassan@gmail.com",
      password: "Abcd@1234",
      user_type: "normal",
      application: "app2",
    },
  ];

  var matchemail, matchpassword;
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) return seterrormsg("Email Required!");
    if (!password) return seterrormsg("Password Required!");
    matchemail = loginCredentials.filter((e) => e.email === email);
    if (matchemail[0]?.password !== password) {
      seterrormsg("Incorrect Password");
    } else {
      matchpassword = true;
      seterrormsg("");
    }

    if (matchemail && matchpassword) {
      setIsLoggedIn(true);
      seterrormsg("");
      if (matchemail[0]?.user_type === "admin") {
        return navigate("/admin-dashboard");
      } else if (matchemail[0]?.user_type === "normal") {
        if (matchemail[0]?.application === "app1") {
          return navigate("/application1");
        }
        if (matchemail[0]?.application === "app2") {
          return navigate("/application2");
        }
        return navigate("/user-dashboard");
      } else seterrormsg("Incorrect Email or Password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col justify-center min-h-screen overflow-hidden"
    >
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-300/40 ring ring-2 ring-gray-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 uppercase">
          Sign in
        </h1>
        <div className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-gray-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Login
            </button>
          </div>
          {errormsg && (
            <div
              className="text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong class="font-bold">{errormsg}</strong>
            </div>
          )}
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-gray-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </form>
  );
}
