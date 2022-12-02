import jwtDecode from 'jwt-decode';
import { UserType } from '@/context/JWTContext/JWTContext.types';

export const decodedToken = (accessToken: string) => {
  if (!accessToken) {
    return null;
  }

  // ----------------------------------------------------------------------

  const decoded: UserType = jwtDecode(accessToken);

  return decoded;
};

export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
  } else {
    localStorage.removeItem('accessToken');
  }
};
