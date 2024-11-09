<script setup>
import { useMoviesStore } from '@/stores/stores';

    const movieStore = useMoviesStore()

    defineProps({
        movie: {
            id: Number,
            title: String,
            year: Number,
            gender: String
        }
    })

    function deleteMovie(id) {
        var index = movieStore.movies.findIndex(movie => movie.id === id)
        movieStore.movies.splice(index, 1)
    }

</script>

<template>
    <div class="movie-item">
        <RouterLink :to="movie.id.toString()" class="movie-item-container">
            <div> <span class="bold">Título:</span> {{ movie.title }}</div>
            <div> <span class="bold">Ano:</span> {{ movie.year }}</div>
            <div> <span class="bold">Gênero:</span> {{ movie.gender }}</div>
        </RouterLink>
        <button @click="deleteMovie(movie.id)" class="delete-movie-button">Excluir</button>
    </div>
</template>

<style>
    .movie-item {
        display: flex;
        flex-flow: row nowrap;
        justify-content: baseline;
        align-items: center;
    }

    .movie-item-container {
        width: 600px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        gap: 4px;
        color: #000000;
        border-radius: 4px;
    }

    .bold {
        font-weight: bold; 
    }

    .delete-movie-button {
        background-color: #930b06;
    }
</style>