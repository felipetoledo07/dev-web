<script setup>
import TheHeader from '@/components/basic/TheHeader.vue';
import TheFooter from '@/components/basic/TheFooter.vue';
import { RouterView } from 'vue-router'
</script>

<template>
    
  <div class="wrapper">
    <TheHeader/>
    <RouterView />
    <TheFooter/>
  </div>

</template>

