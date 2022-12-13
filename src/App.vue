<template>
  <div class="my-app">
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

export default {
  components: {
    FeatureWrapper,
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
