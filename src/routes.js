import multiguard from 'vue-router-multiguard';

import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Dashboard from './pages/Dashboard.vue';

import DashboardHome from './components/dashboard/DashboardHome.vue';

const logado = (to, from, next) => {
  if (localStorage.getItem('AUTENTICADO')) {
    next();
  } else {
    next({
      path: '/',
    });
  }
};

const deslogado = (to, from, next) => {
  if (!localStorage.getItem('AUTENTICADO')) {
    next();
  } else {
    next({
      path: '/dashboard',
    });
  }
};

export default [
  {
    path: '/login',
    component: Login,
    beforeEnter: multiguard([deslogado]),
  },
  {
    path: '/register',
    component: Register,
    beforeEnter: multiguard([deslogado]),
  },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: multiguard([logado]),
    children: [
      { path: '/', component: DashboardHome },
    ],
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    redirect: '/',
  },
];
