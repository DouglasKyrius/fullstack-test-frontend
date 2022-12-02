import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { reducer } from './JWTContext.reducer';
import {
  AccessTokenType,
  ACTION_TYPES,
  AuthContextInterface,
} from './JWTContext.types';
import { decodedToken, setSession } from '@/utils/jwt';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const AuthContext = createContext({} as AuthContextInterface);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
          const user = decodedToken(accessToken);

          dispatch({
            type: ACTION_TYPES.INITIALIZE,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: ACTION_TYPES.INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        dispatch({
          type: ACTION_TYPES.INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = useCallback(({ accessToken }: AccessTokenType) => {
    const user = decodedToken(accessToken);
    setSession(accessToken);

    dispatch({
      type: ACTION_TYPES.LOGIN,
      payload: {
        user,
      },
    });
  }, []);

  const register = useCallback(async ({ accessToken }: AccessTokenType) => {
    const user = decodedToken(accessToken);
    setSession(accessToken);

    dispatch({
      type: ACTION_TYPES.REGISTER,
      payload: {
        user,
      },
    });
  }, []);

  const logout = useCallback(async () => {
    setSession(null);
    dispatch({ type: ACTION_TYPES.LOGOUT });
  }, []);

  const values = useMemo(
    () => ({
      ...state,
      login,
      logout,
      register,
    }),
    [state, login, logout, register]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
