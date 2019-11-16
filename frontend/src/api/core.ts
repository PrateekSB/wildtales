import axios, { AxiosRequestConfig } from 'axios';

import router from '@/router';
import { storeProxy } from '@/store';
import { SessionUser } from '@/types';

const requestConfig: AxiosRequestConfig = {
  baseURL: '/api/v1',
  timeout: 50000,
};

export const apiCall = axios.create(requestConfig);

export const authApiCall = axios.create(requestConfig);

authApiCall.interceptors.request.use(
  config => {
    // Clear session before sending logout request
    if (config.url === '/logout') {
      storeProxy.session.clearSession();
      return config;
    }

    // Check if session exists.
    const session = storeProxy.session.getSessionUser;
    if (!session) {
      throw new Error("Can't get the session of the current user");
    }

    // Inject token
    const { access_token } = session as SessionUser;
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
      return config;
    }

    const msg = 'JWT token is not available for request';
    throw new Error(msg);
  },
  error => Promise.reject(error),
);

authApiCall.interceptors.response.use(
  response => response,
  async error => {
    if (error.response && error.response.status === 401) {
      storeProxy.session.clearSession().finally(() => router.push('/login'));
    }
    throw error;
  },
);
