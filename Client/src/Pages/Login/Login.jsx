// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../Hooks/useLogin'; // Adjust the path as necessary

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <div className='flex items-center justify-center flex-col w-[40%] h-[70%] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
      <h1 className='text-2xl font-bold'>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label'>User Name</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full max-w-xs text-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className='label'>Password</label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered input-accent text-black w-full max-w-xs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn mt-4 bg-green-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 text-white"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p className='text-sm text-gray-500 mt-4'>
        Do not have an account?
        <Link to={'/signUp'} className='link link-accent'>Register</Link>
      </p>
    </div>
  );
};

export default Login;
