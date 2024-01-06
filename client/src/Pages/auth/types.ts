export type LoginResponse = {
  data: {
    id: number;
    login: string;
    token: string;
    expires: string;
  };
};
export type LoginRequest = {
  login: string;
  password: string;
};
