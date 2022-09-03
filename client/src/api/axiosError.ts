import { AxiosError } from 'axios';

export const axiosError = (error: AxiosError) => {
  return Promise.reject(error.response?.data.error || error.message);
};
