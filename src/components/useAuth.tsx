import { useState, useEffect } from 'react';

interface UseAuthResult {
  isLogged: string;
}

export default function useAuth(): UseAuthResult {
  const [isLogged, setIsLogged] = useState('Not logged in');

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLogged('Logged in!');
    };

    fetchData();
  }, []);

  return { isLogged };
}