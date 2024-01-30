import { LoginRequest } from './types';

export const root = () => ({
  login(credentials: LoginRequest) {
    return fetch('http://localhost:7070/api/auth', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  },
});

export const auth = root();
