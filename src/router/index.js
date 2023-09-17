// src/router.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import dashboard from '../components/dashboard.vue'
import Gallary from '../components/Gallary.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard,
  },
  {
    path: '/gallary',
    name: 'gallary',
    component: Gallary,
  },
];

const router = new VueRouter({
  mode: 'history', // Use history mode for clean URLs (optional)
  routes,
});

export default router;
