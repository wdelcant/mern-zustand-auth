import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthState = {
  token: string;
};

type AuthActions = {
  setToken: (token: string) => void;
};

export const useAuthStore = create(
  persist<AuthState & AuthActions>(
    set => ({
      token: '',
      setToken: token => set({ token }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
