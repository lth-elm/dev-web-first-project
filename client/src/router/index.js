import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BrainstormInfo from '../views/BrainstormInfo.vue'
import Csharp from '../views/Csharp.vue'
import PhysiqueMemo from '../views/PhysiqueMemo.vue'
import Sign from '../views/Sign.vue'
import Crypto from '../views/Crypto.vue'
import SecretPhysique from '../views/SecretPhysique.vue'
import MarcheFinancier from '../views/MarcheFinancier.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brainstorm',
    name: 'BrainstormInfo',
    component: BrainstormInfo
  },
  {
    path: '/csharp',
    name: 'Csharp',
    component: Csharp
  },
  {
    path: '/physiquememo',
    name: 'PhysiqueMemo',
    component: PhysiqueMemo
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/cryptomonnaie',
    name: 'Crypto',
    component: Crypto,
    beforeEnter (to, from, next) {
      const token = localStorage.getItem('token')
      if (token) {
        next(true)
        return
      }
      next({ name: 'Sign' })
    }
  },
  {
    path: '/marche-financier',
    name: 'MarcheFinancier',
    component: MarcheFinancier
  },
  {
    path: '/secret-physique',
    name: 'SecretPhysique',
    component: SecretPhysique
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
