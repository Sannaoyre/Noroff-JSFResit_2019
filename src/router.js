import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Grass from './views/Grass.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/grass',
      name: 'grass',
      component: Grass
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },

  //  {
    //  path: '/about',
    //  name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //  component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  //  }
  ]
})
