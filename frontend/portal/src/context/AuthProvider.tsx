import { createContext, useContext, useState, ReactNode } from 'react';
import { useLoginMutation, useLogoutMutation } from '../api/auth';
import { useQueryClient } from 'react-query';

interface AuthContextType {
  user: User | null;
  login: (data: LoginData) => Promise<void>;
  logout: () => void;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface LoginData {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const queryClient = useQueryClient();

  const loginMutation = useLoginMutation();
  const logoutMutation = useLogoutMutation();

  const login = async (data: LoginData) => {
    try {
      const user = await loginMutation.mutateAsync(data);
      setUser(user);
      queryClient.invalidateQueries('user');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      setUser(null);
      queryClient.invalidateQueries('user');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const value = { user, login, logout: handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
