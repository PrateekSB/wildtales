import { createModule, mutation, action } from 'vuex-class-component';
import { login } from '@/api/user';
import { SessionUser } from '@/types';

// tslint:disable-next-line:variable-name
const VuexModule = createModule({
  namespaced: true,
  strict: false,
});

export class SessionStore extends VuexModule {
  private sessionUser: SessionUser | undefined = undefined;

  get getSessionUserFromStorage() {
    const json = localStorage.getItem('session');
    return json ? (JSON.parse(json) as SessionUser) : false;
  }

  @mutation setSessionUser(sessionUser: SessionUser) {
    this.sessionUser = sessionUser;
  }

  @action async createSessionUser(payload: any) {
    const { username, password } = payload;
    const sessionUser = await login(username, password);
    localStorage.setItem('session', JSON.stringify(sessionUser));

    this.setSessionUser(sessionUser);
  }

  @action async clearSession() {
    localStorage.removeItem('session');
    this.sessionUser = undefined;
  }

  get getSessionUser() {
    if (this.sessionUser) {
      return this.sessionUser;
    }

    if (this.getSessionUserFromStorage) {
      this.setSessionUser(this.getSessionUserFromStorage);
      return this.getSessionUserFromStorage;
    }

    throw new Error('Session has expired');
  }
}
