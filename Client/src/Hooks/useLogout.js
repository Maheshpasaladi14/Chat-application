import { useState } from 'react';
import { useAuthContext } from '../Context/AuthContext';
import { toast } from 'react-hot-toast';

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuthContext();

  const logout = async () => {
    setLoading(true);

    try {
      // Clear the user data from local storage
      localStorage.removeItem('users');

      // Update the auth context to reflect that the user is logged out
      setAuth(null);

      // Display a success message
      toast.success('Successfully logged out');
    } catch (error) {
      toast.error('Error logging out');
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};

export default useLogout;
