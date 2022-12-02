import { useContext } from 'react';
import { AuthContext } from '@/context/JWTContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
