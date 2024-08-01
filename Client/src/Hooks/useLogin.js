import { useState } from 'react';
import { useAuthContext } from '../Context/AuthContext';
import { toast } from 'react-hot-toast';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuthContext();

  const login = async ({ username, password }) => {
    if (!username || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('users', JSON.stringify(data));
        setAuth(data);
        toast.success('Login successful');
      } else {
        throw new Error(data.message || 'Login failed ');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
