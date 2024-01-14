<template>
  <div class="my-app">
    <div class="container">
      <TheWelcome />
      <div v-if="isFeatureFlagEnabled === true">
        <TheNewFeature />
      </div>
      <div v-else-if="isFeatureFlagEnabled === false" class="feature-not-available-wrapper">
        <p>Sorry this feature is not available. Your feature flag is off.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, onBeforeMount, type Ref } from 'vue'
import { User, type IConfigCatClient } from 'configcat-vue'

import TheWelcome from '@/components/TheWelcome.vue'
import TheNewFeature from '@/components/TheNewFeature.vue'

// Inject the ConfigCat client
const configCatClient =
  inject<IConfigCatClient>('configCatClient') ??
  (() => {
    throw new Error('ConfigCatPlugin was not installed.')
  })()

const isFeatureFlagEnabled: Ref<undefined | boolean> = ref(false)

// Create the user object
const user = new User('john@example.com')
const userObject = ref<User>(user)

const featureFlagKey = 'myFirstFeatureFlag'

const getAndSetFeatureFlagValue = async () => {
  const featureFlagValue = configCatClient.getValueAsync(featureFlagKey, false, userObject.value)
  if (isFeatureFlagEnabled.value !== (await featureFlagValue)) {
    isFeatureFlagEnabled.value = await featureFlagValue
  }
}

onBeforeMount(() => {
  getAndSetFeatureFlagValue()
  configCatClient.on('configChanged', getAndSetFeatureFlagValue)
})
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
