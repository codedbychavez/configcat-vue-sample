<template>
  <div class="my-app">
    <div class="container">
      <Welcome />
      <TheNewFeature />
      <!-- TODO: We should be able to listen to when the feature flag changes 
      | Some kind of event emitter that we can react to
      -->
      <FeatureWrapper featureKey="dialogmessage" :userObject="userObject">
        <p>
          This will show if the feature flag with <b>featurekey</b> is enabled in
          ConfigCat
        </p>
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
    // TODO: React to changes of the event emitter
  }
};
</script>

<style scoped>

.my-app {
  display: flex;
  justify-content: center;
}

</style>
