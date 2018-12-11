/* global Vue */
import Router from 'vue-router';
import Home from '@/views/home.vue';
import Me from '@/views/me.vue';

Vue.use(Router);

module.exports = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: 'home'
      }
    },
    {
      path: '/me',
      name: 'me',
      component: Me,
      meta: {
        title: 'me'
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
});
