import { createRouter, createWebHistory } from 'vue-router';
import FirstPage from '@/components/FirstPage.vue'; // Якщо у вас є перша сторінка
import AuthForm from '@/components/AuthForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: FirstPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: AuthForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
