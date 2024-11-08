import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import MoviePage from '@/views/MoviePage.vue'
import CreateMoviePage from '@/views/CreateMoviePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    }, {
      path: '/add',
      name: 'addMovie',
      component: CreateMoviePage
    }, {
      path: '/movie',
      name: 'movie',
      component: MoviePage
    },
  ],
})

export default router
