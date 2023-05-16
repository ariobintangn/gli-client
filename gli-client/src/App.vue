<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <div class="h-screen">
<!-- 
    <header>
      <RouterLink to="/"></RouterLink>
      <RouterLink to="/about"></RouterLink>
    </header> -->

    <Header class="h-1/6"/>
    
    <RouterView class="h-5/6"/>
  </div>
</template>

<style scoped>

</style>
