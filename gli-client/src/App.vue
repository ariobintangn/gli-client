<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <div class="h-full bg-slate-400">
<!-- 
    <header>
      <RouterLink to="/"></RouterLink>
      <RouterLink to="/about"></RouterLink>
    </header> -->
    
    <RouterView class="h-full"/>
  </div>
</template>

<style scoped>

</style>
