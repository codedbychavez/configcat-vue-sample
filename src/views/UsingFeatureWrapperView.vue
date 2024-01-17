<template>
  <div class="using-feature-wrapper-view">
    <FeatureWrapper
      featureKey="YOUR-FEATURE-FLAG-KEY"
      :userObject="userObject"
      @flagValueChanged="handleFlagValueChange"
    >
      <TheNewFeature />
      <template #else>
        <!-- What you want to be displayed when the feature flag is turned off. You can add anything in this block like html elements or other vue components -->
        <div class="feature-not-available-wrapper">
          <p>Sorry this feature is not available. Your feature flag is off.</p>
        </div>
      </template>
      <template #loading>
        <!-- What you want to be displayed while the feature flag is loading. You can add anything in this block like html elements or other vue components -->
        <div class="loading-wrapper">
          <p>Loading...</p>
        </div>
      </template>
    </FeatureWrapper>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, onBeforeMount } from 'vue'

// USING USER OBJECT: Import the User type
import { User } from 'configcat-vue'

// USING HOOKS: Import the ConfigCat SDK client interface
import type { IConfigCatClient } from 'configcat-vue'

// USING HOOKS: Inject the underlying ConfigCat client
const configCatClient = inject<IConfigCatClient>('configCatClient')

// USING USER OBJECT: Create a ref that will be used as the user object
const user = new User('john@example.com')
const userObject = ref<User>(user)

import { FeatureWrapper } from 'configcat-vue'
import TheNewFeature from '@/components/TheNewFeature.vue'

onBeforeMount(() => {
  // USING HOOKS: Subscribe to the hook using the .on method of the ConfigCat client
  configCatClient?.on('flagEvaluated', () => {
    console.log('Flag evaluated')
  })
})

// Handle feature flag value changes
const handleFlagValueChange = (featureFlagValue: boolean) => {
  console.log('Flag value change to: ', featureFlagValue)
}
</script>

<style scoped>
.feature-not-available-wrapper {
  background-color: orange;
  padding: 1rem 2rem;
  border-left: 0.4rem solid orangered;
}
</style>
