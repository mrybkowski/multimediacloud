import axios from 'axios';
import { useMutation } from 'react-query';
import dotenv from 'react-dotenv';

const useLogoutMutation = () => {
  const REACT_APP_API_BASE_URL = dotenv.REACT_APP_API_BASE_URL;

  return useMutation(async () => {
    await axios.post(`${REACT_APP_API_BASE_URL}/api/logout`);
  });
};

export { useLogoutMutation };
