import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Login from '../views/Login.vue';
import RawData from '../views/RawData.vue';
import Dashboard from '../views/Dashboard.vue';
import TherapyProcess from '../views/TherapyProcess.vue';
import Export from '../views/Export.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: 'raw-data',
        component: RawData,
      },
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'therapy-process',
        component: TherapyProcess,
      },
      {
        path: 'export',
        component: Export,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
