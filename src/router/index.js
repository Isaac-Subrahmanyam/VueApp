import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  // views
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/flight-sim',
    name: 'Flight Sim',
    component: () => import('../flight-sim/FlightSimHome.vue')
  },
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/Experience.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },

  // games
  {
    path: '/gravity',
    name: 'gravity',
    component: () => import('../games/Gravity.vue')
  },
  {
    path: '/puzzleballsort',
    name: 'puzzleballsort',
    component: () => import('../games/PuzzleBallSort.vue')
  },
  {
    path: '/thecurrent',
    name: 'thecurrent',
    component: () => import('../games/TheCurrent.vue')
  },
  {
    path: '/flybird',
    name: 'flybird',
    component: () => import('../games/FlyBird.vue')
  },
  {
    path: '/adventuresofthesouthpole',
    name: 'adventuresofthesouthpole',
    component: () => import('../games/AdventuresOfTheSouthPole.vue')
  },
  {
    path: '/rolly',
    name: 'rolly',
    component: () => import('../games/Rolly.vue')
  },
  {
    path: '/burgermaster',
    name: 'burgermaster',
    component: () => import('../games/BurgerMaster.vue')
  },
  {
    path: '/donttouchthered',
    name: 'donttouchthered',
    component: () => import('../games/DontTouchTheRed.vue')
  },
  {
    path: '/nerdsnightmares',
    name: 'nerdsnightmares',
    component: () => import('../games/NerdsNightmares.vue')
  },
  {
    path: '/unicornmania',
    name: 'unicornmania',
    component: () => import('../games/UnicornMania.vue')
  },
  {
    path: '/theemojigame',
    name: 'theemojigame',
    component: () => import('../games/TheEmojiGame.vue')
  },
  {
    path: '/spiral',
    name: 'spiral',
    component: () => import('../games/Spiral.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.replace({ path: '*', redirect: '/' })

export default router
