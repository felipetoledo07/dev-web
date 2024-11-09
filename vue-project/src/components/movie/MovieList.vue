<script setup>
import MovieItem from './MovieItem.vue';
import { useMoviesStore } from '@/stores/stores';

const movieStore = useMoviesStore()

</script>


<template>

    <div class="movie-container">
        <template v-if="movieStore.movies.length === 0">
            <div>Não existem filmes cadastrados</div>
        </template>
        <template v-else>
            <div class="movie-list-container" v-for="movie in movieStore.movies" :key="movie.id">
                <MovieItem :movie="movie" ></MovieItem>
            </div>
        </template>
    </div>

</template>

<style>
    .movie-list-container {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        margin-top: 4px;
        background-color: #ffffff;
    }

    .movie-container {
        margin: 40px 0 20px 0;
        overflow: scroll;
    }
</style>