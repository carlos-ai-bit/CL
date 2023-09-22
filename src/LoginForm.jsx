/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Perform login logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto">
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true })}
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register('password', { required: true })}
          className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;