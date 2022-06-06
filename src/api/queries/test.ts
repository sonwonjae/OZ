import { useMutation, UseMutationOptions } from 'react-query';

import { AxiosError, AxiosResponse } from 'axios';
import { axiosServiceV2 } from '@api';

import { FetchDataType } from '@/types/fetchData';
import { LoginRequestDataType } from '@/types/login';

// 로그인 요청
const fetchLogin = async (reqData: LoginRequestDataType) => {
  const res = await axiosServiceV2.post(`/users/login`, reqData, {
    withCredentials: true,
  });
  console.log({ res });
  return res;
};
export const useLoginMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError<FetchDataType>, LoginRequestDataType, void>
) => {
  return useMutation((reqData: LoginRequestDataType) => fetchLogin(reqData), options);
};
