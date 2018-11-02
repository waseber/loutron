import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Services from './components/Services.vue';
import Locations from './components/Locations.vue';
import Contact from './components/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/our-services',
      name: 'services',
      component: Services,
    },
    {
      path: '/locations',
      name: 'locations',
      component: Locations,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
