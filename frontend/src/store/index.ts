import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';
import { SessionStore } from '@/store/session';
import { DashboardStore } from '@/store/dashboard';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(SessionStore),
    ...extractVuexModule(DashboardStore),
  },
});

export const storeProxy = {
  session: createProxy(store, SessionStore),
  dashboard: createProxy(store, DashboardStore),
};
