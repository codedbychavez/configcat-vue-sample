<template>
  <div class="using-configcat-client-view">
    <p class="description">
      This npm package also provides access to the underlying ConfigCat client. This can be
      especially useful in situations where the predefined
      <span class="bold">FeatureWrapper</span> component might not be the most suitable choice.
    </p>
    <p class="description">
      In the example below, the ConfigCat client is used to retrieve all feature flags and their
      corresponding values from your ConfigCat dashboard.
    </p>
  </div>
  <UsingConfigCatClient />
</template>

<script setup lang="ts">
import UsingConfigCatClient from '@/components/UsingConfigCatClient.vue'
</script>
