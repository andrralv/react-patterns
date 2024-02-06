import { useState, useEffect } from 'react';

export default function withAuth<T>(Component: React.FC<T>) {
  return function Authorized(props: any) { 
    const [isLogged, setIsLogged] = useState('Not Logged In');
 
    useEffect(() => {
      const fetchData = async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLogged('Logged In!');
      }
      fetchData();
    }, []);

    return <Component {...props} isLogged={isLogged} />
  };
}