import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../components/Navbar.vue'
import Movies from '../views/Movies.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },

  {
    path: '',
    name: 'Navbar',
    component: Navbar
  },

  {
    path:'/about',
    name:'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
