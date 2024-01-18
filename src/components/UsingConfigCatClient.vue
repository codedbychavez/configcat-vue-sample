<template>
  <div class="using-configcat-client">
    <div class="flags-not-found" v-if="featureFlags?.length === (undefined || 0)">
      No feature flags found !
    </div>
    <div v-else class="feature-flag-cards-wrapper">
      <div
        class="feature-flag-card"
        v-for="featureFlag in featureFlags"
        :key="featureFlag.settingKey"
      >
        <div class="card-header">
          <div class="feature-flag-name">{{ featureFlag.settingKey }}</div>
        </div>
        <div class="card-body">
          <div class="feature-flag-value">{{ featureFlag.settingValue }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'

// Import the ConfigCat client interface
import { SettingKeyValue, type IConfigCatClient, type SettingValue } from 'configcat-vue'

const configCatClient = inject<IConfigCatClient>('configCatClient')

const featureFlags = ref<SettingKeyValue<SettingValue>[] | undefined>([])

onMounted(async () => {
  // Fetch feature flags
  const response = await configCatClient?.getAllValuesAsync()
  featureFlags.value = response
})
</script>

<style scoped>
.feature-flag-card {
  border: 1px solid teal;
  padding: 1rem 0.5rem;
  border-radius: 0.3rem;
}

.feature-flag-card + .feature-flag-card {
  margin-top: 1rem;
}

.feature-flag-name {
  font-weight: bolder;
  font-size: 1.25rem;
}

.feature-flag-value {
  margin-top: 0.2rem;
  font-size: 1rem;
  color: gray;
}

.flags-not-found {
  color: orangered;
  font-weight: bold;
}
</style>
