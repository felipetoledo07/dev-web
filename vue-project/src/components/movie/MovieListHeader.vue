<template>
    <div class="movie-list-header-component">
        <h2>Lista de filmes cadastrados</h2>
        <RouterLink class="button add-movie-button" to="/add">Adicionar filme</RouterLink>
    </div>
</template>

<style>
    .movie-list-header-component {
        width: 80%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        gap: 16px;
    }

    .add-movie-button {
        color: #eaf6f9;
    }

</style>