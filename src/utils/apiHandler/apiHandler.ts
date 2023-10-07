
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { startsWith } from 'lodash-es';
import { API_URL } from '@configs/constant.ts';

/** Request */
const onRequest = (
	config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  config.headers['Content-Type'] = 'application/json';
  const request = {
	...config,
  };
  if (!startsWith(request.url, 'http')) {
	request.url = `${API_URL}${request.url}`;
  }
  return request;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

/** Response */
const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

export const setupAxiosInterceptors = () => {
  axios.interceptors.request.use(onRequest, onRequestError);
  axios.interceptors.response.use(onResponse, onResponseError);
};
