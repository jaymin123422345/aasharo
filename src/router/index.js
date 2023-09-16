// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import dashboard from '../components/dashboard.vue'
import Gallary from '../components/Gallary.vue'


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

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;
