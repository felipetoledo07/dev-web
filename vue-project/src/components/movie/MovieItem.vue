<script setup>
    const props = defineProps({
        movie: {
            id: Number,
            titulo: String,
            ano: Number,
            genero: String
        }
    })

</script>

<template>
    <div class="movie-item-container">
        <div> <span class="bold">Título:</span> {{ movie.titulo }}</div>
        <div> <span class="bold">Ano:</span> {{ movie.ano }}</div>
        <div> <span class="bold">Gênero:</span> {{ movie.genero }}</div>
        <button class="delete-movie-button">Excluir</button>
    </div>
</template>

<style>
    .movie-item-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        gap: 4px;
        border: 1px solid #000000;
        border-radius: 4px;
        padding: 4px;

    }

    .bold {
        font-weight: bold; 
    }

    .delete-movie-button {
        background-color: #930b06;
    }
</style>