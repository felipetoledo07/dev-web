<script setup>
import { reactive } from 'vue';
import MovieItem from './MovieItem.vue';

const movies = reactive([
        {
            id: 1,
            titulo: "Filme teste",
            ano: 2023,
            genero: "XPTO"

        },
        {
            id: 1,
            titulo: "Filme teste",
            ano: 2023,
            genero: "XPTO"

        }
    ])

</script>


<template>

    <div>
        <template v-if="movies.length === 0">
            <div>Não existem filmes cadastrados</div>
        </template>
        <template v-else>
            <div class="movie-list-container" v-for="movie in movies" :key="movie.id">
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
    }
</style>