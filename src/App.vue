<template>
  <div class="my-app">
    <FeatureWrapper featureKey="featurekey">
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
};
</script>
