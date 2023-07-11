<template>
  <div class="my-app">
    <Welcome />
    <Instructions />
    <TheNewFeature />
    <FeatureWrapper featureKey="dialogmessage" :userObject="userObject">
      <p>
        This will show if the feature flag with <b>featurekey</b> is enabled in
        ConfigCat
      </p>
    </FeatureWrapper>
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
  }
};
</script>
