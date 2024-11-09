import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', () => {
  let movies = ref([])
  let id = ref(0)

  return { movies, id}
})
