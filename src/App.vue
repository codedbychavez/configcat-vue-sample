<template>
  <div class="my-app">
    <div class="container">
      <Welcome />
      <FeatureWrapper featureKey="myFirstFeatureFlag" @flag-value-changed="handleFlagValueChange">
        <TheNewFeature />
        <template #else>
          <!-- What you want to be displayed when the feature flag is turned off. You can add anything in this block like html elements or other vue components -->
          <div class="feature-not-available-wrapper">
            <p>Sorry this feature is not available. Your feature flag is off.</p>
          </div>
        </template>
      </FeatureWrapper>
    </div>
  </div>
</template>

<script>
import { FeatureWrapper } from "configcat-vue";
import Welcome from "./components/Welcome.vue";
import Instructions from "./components/Instructions.vue";
import TheNewFeature from "./components/TheNewFeature.vue";

export default {
  components: {
    FeatureWrapper,
    Welcome,
    Instructions,
    TheNewFeature,
  },
  data() {
    return {
      userObject: { // Passing userObject as a prop to the FeatureWrapper is optional
        identifier: 'john@example.com',
      }
    }
  },
  methods: {
    // TODO: React to changes of your feature flag value.
    handleFlagValueChange(flagValue) {
      console.log('The feature flag value has changed. It is ', flagValue);
    }
  },
  mounted() {
  // If you need to subscribe to events emitted by the ConfigCat client you can do it this way:
  //   this.configCatClient.on('NAME-OF-HOOK', () => {
  //     console.log('Do something...');
  //   })

  // Learn more about hooks here: https://configcat.com/docs/sdk-reference/js/#hooks
  }
}
</script>

<style scoped>

.my-app {
  display: flex;
  justify-content: center;
}

.feature-not-available-wrapper {
  background-color: orange;
  padding: 1rem 2rem;
  border-left: .4rem solid orangered;
}

</style>
