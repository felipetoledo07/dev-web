<script setup>
import { useMoviesStore } from '@/stores/stores';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const id = route.params.id

const movieStore = useMoviesStore()

const index = movieStore.movies.findIndex(movie => movie.id === parseInt(id))

if(index === -1) {
    router.push('/notfound')
}

</script>

<template>
    <div class="movie-form-container">
        <div><span class="bold">Título:</span> {{ movieStore.movies[index]?.title }}</div>
        <div><span class="bold">Ano:</span> {{ movieStore.movies[index]?.year }}</div>
        <div><span class="bold">Gênero:</span> {{ movieStore.movies[index]?.gender }}</div>
    </div>
</template>
