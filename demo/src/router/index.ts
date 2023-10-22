import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/text',
    name: 'text',
    component: () => import('../views/text.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/404/index.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
// 路由前置守卫
import pinia, { UserStore } from '../store';
router.beforeEach((to, form, next) => {
  const userstore = UserStore(pinia)
  if (to.path != '/login') {
    if (userstore.token) {
      next()
    }
    next('/login')
  }
  next()
})
export default router;