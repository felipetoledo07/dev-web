<script setup>
    import { useMoviesStore } from '@/stores/stores';
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';

    const router = useRouter()
    
    const title = ref("")
    const year = ref("")
    const gender = ref("")

    const movieStore = useMoviesStore()

    function createMovie() {

        const emptyTitle = title.value.trim() === ""
        const emptyYear = year.value === ""
        const emptyGender = gender.value.trim() === ""


        if ( emptyTitle || emptyYear || emptyGender) {
            return alert("Informações faltantes para criação do filme. Preencha os campos obrigatórios")
        }


        const yearBeforeFirstCreatedMovie = year.value < 1895
        const yearGreaterThanCurrentYear = year.value > new Date().getFullYear()

        if(yearBeforeFirstCreatedMovie || yearGreaterThanCurrentYear) {
            return alert("Ano informado inválido")
        }

        movieStore.id++

        const movie = {
        "id": movieStore.id,
        "title": title.value,
        "year": year.value,
        "gender": gender.value
    }

        movieStore.movies.push(movie)

        title.value = ""
        year.value = ""
        gender.value = ""

        router.push('/')

    }
    
</script>

<template>
    <div class="movie-form-container">
        <label>
            Título
            <input v-model="title" type="text" required>
        </label>
        <label>
            Ano
            <input v-model="year" type="number" required>
        </label>
        <label>
            Gênero
            <input v-model="gender" type="text" required>
        </label>
        <button @click="createMovie" class="create-button">Cadastrar</button>
    </div>
</template>

<style>

    .movie-form-container {
        margin-top: 40px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-end;
        gap: 8px;
    }

    .create-button {
        align-self: center;
    }

</style>