<script setup>
import TheFooter from '@/components/basic/TheFooter.vue';
import TheHeader from '@/components/basic/TheHeader.vue';
import MovieList from '@/components/movie/MovieList.vue';
import MovieListHeader from '@/components/movie/MovieListHeader.vue';

</script>

<template>
    <TheHeader/>
    <main>

        <MovieListHeader/>
        <MovieList/>
    
    
    </main>
    <TheFooter/>
</template>
