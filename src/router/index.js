import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import SinglePost from '../views/SinglePost.vue'
import User from '../views/User.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: Register
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    props: true
  },
  {
    path: '/publication/:postId',
    name: 'publication',
    component: SinglePost,
    props: true
  },
  {
    path: '/utilisateur/:userId',
    name: 'utilisateur',
    component: User,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
