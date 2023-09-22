/* eslint-disable no-unused-vars */
import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginSignup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold">Login or Sign Up</h1>
      <div className="flex space-x-4">
        <LoginForm />
        <SignupForm />
      </div>
    </div>
  );
};

export default LoginSignup;
