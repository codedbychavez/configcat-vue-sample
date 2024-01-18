<template>
  <header>
    <NavigationBar />
  </header>
  <div class="has-padding router-view-wrapper container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>
