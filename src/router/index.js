import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Grupos from '../views/Grupos.vue'
import Perfil from '../views/Perfil.vue'
import SignIn from '../views/Sign-in.vue'
import Timeline from '../views/Timeline.vue'
import CreateAccount from '../views/CreateAccount.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/grupos',  
    name: 'Grupos',
    component: Grupos
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/create-account',
    name: 'CreateAccount',
    component: CreateAccount
<<<<<<< HEAD
  },
  {
    path: '/sign-up',
    name: 'Sign-Up',
    component: SignUp
=======
>>>>>>> 017a9c66e239d6a616befa06bda79853982c9322
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline
  },
  
]

const router = new VueRouter({
  routes
})

export default router
