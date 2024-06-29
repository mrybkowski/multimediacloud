import axios from 'axios';
import { useMutation } from 'react-query';
import dotenv from 'react-dotenv';

interface User {
  id: number;
  name: string;
  email: string;
}

interface LoginData {
  email: string;
  password: string;
}

const useLoginMutation = () => {
  const REACT_APP_API_BASE_URL = dotenv.REACT_APP_API_BASE_URL;

  const loginMutation = useMutation<User, Error, LoginData>(
    async (data: LoginData) => {
      const response = await axios.post<User>(
        `${REACT_APP_API_BASE_URL}/api/login`,
        data
      );
      return response.data;
    }
  );

  return loginMutation;
};

export { useLoginMutation };
