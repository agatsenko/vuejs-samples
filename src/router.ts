import HomeView from '@/views/home-view.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/(home\\.html)?',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/counter.html',
      name: 'counter',
      component: () => import(/* webpackChunkName: "counter" */ '@/views/counter-view.vue'),
    },
    {
      path: '/todo.html',
      name: 'todo',
      component: () => import(/* webpackChunkName: "todo" */ '@/views/todo-view.vue'),
    }
  ],
});
