
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
  },
  {
    path: '/',
    name: 'App',
    component: () => import('../App.vue'),
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });



export default router;
