import axios from 'axios';
import { LoginRequest } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const root = () => ({
  login(credentials: LoginRequest) {
    return instance.post('http://localhost:7000/api/auth', credentials);
  },
});
export const auth = root();
