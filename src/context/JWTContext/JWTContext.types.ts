export const ACTION_TYPES = {
  INITIALIZE: 'INITIALIZE',
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  LOGOUT: 'LOGOUT',
};

export type UserType = {
  exp: number;
  iat: number;
  username: string;
  _id: string;
};

export type InitialStateType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: UserType | null;
};

export type AccessTokenType = {
  accessToken: string;
};

export interface AuthContextInterface extends InitialStateType {
  login: ({ accessToken }: AccessTokenType) => void;
  register: ({ accessToken }: AccessTokenType) => Promise<void>;
  logout: () => Promise<void>;
}
