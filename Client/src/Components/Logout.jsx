// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../Hooks/useLogout'; // Adjust the path as necessary

const Logout = () => {
  const { logout, loading } = useLogout();

  return (
    <div className='mt-auto'>
      <BiLogOut
        className={`w-6 h-6 text-white cursor-pointer ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={loading ? null : logout}
        title={loading ? 'Logging out...' : 'Logout'}
      />
    </div>
  );
};

export default Logout;
