// eslint-disable-next-line import/no-cycle
import { authApiCall, apiCall } from '@/api/core';
import { SessionUser } from '@/types';

export async function login(username: string, password: string): Promise<SessionUser> {
  const response = await apiCall.post('/login', { username, password });
  return response.data as SessionUser;
}

export async function logout() {
  await authApiCall.post('/logout');
}
