import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import MoviePage from '@/views/MoviePage.vue'
import CreateMoviePage from '@/views/CreateMoviePage.vue'
import NotFound404 from '@/views/NotFound404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage,
    }, {
      path: '/add',
      component: CreateMoviePage
    }, {
      path: '/:id',
      component: MoviePage
    }, {
      path: '/notfound',
      component: NotFound404
    }, {
      path: "/:pathMatch(.*)*",
      component: NotFound404,
    },
  ],
})

export default router
