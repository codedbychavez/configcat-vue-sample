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
import { ClientCacheState, User, type IConfigCatClient } from 'configcat-vue'

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

const configChangedHandler = () => {
  const snapshot = configCatClient.snapshot()
  const featureFlagValue = snapshot.getValue(featureFlagKey, false, userObject.value)
  if (isFeatureFlagEnabled.value !== featureFlagValue) {
    isFeatureFlagEnabled.value = featureFlagValue
  }
}

onBeforeMount(() => {
  const snapshot = configCatClient.snapshot()
  const clientCacheState = snapshot.cacheState

  if (
    clientCacheState === ClientCacheState.HasCachedFlagDataOnly ||
    clientCacheState === ClientCacheState.HasLocalOverrideFlagDataOnly
  ) {
    isFeatureFlagEnabled.value = snapshot.getValue(featureFlagKey, false, userObject.value)
    configCatClient.on('configChanged', configChangedHandler)
  } else {
    configCatClient.getValueAsync(featureFlagKey, false, userObject.value).then((value) => {
      const configChangedHandlerResult = configChangedHandler

      if (!configChangedHandlerResult) {
        return
      }
      isFeatureFlagEnabled.value = value
      configCatClient.on('configChanged', configChangedHandlerResult)
    })
  }
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
