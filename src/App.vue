<template>
<div class="my-app">
  <div class="container">
    <TheWelcome />
  </div>
</div>
</template>

<script setup lang="ts">
import TheWelcome from './components/TheWelcome.vue';
</script>

<style scoped>
.my-app {
  display: flex;
  justify-content: center;
}

.feature-not-available-wrapper {
  background-color: orange;
  padding: 1rem 2rem;
  border-left: 0.4rem solid orangered;
}
</style>
