import axios from 'axios';

export const login = async (email: string, password: string) => {
  return await axios.post('http://localhost:3000/login', {
    email,
    password,
  });
};

export const profile = async (token: string) => {
  return await axios.get('http://localhost:3000/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

