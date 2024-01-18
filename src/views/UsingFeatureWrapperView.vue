<template>
  <div class="using-feature-wrapper-view">
    <p class="description">
      The <span class="bold">FeatureWrapper</span> component is a pre-made way to simplify feature
      flag integration in your Vue.js applications. It facilitates dynamic content display based on
      the state of a feature flag.
    </p>

    <ol class="description">
      <li>
        With your <span class="bold">ConfigCat SDK key</span> added to
        <pre>src/main.ts</pre>
        .
      </li>
      <li>
        In
        <pre>src/components/UsingFeatureWrapper.vue</pre>
        , locate the
        <pre>FeatureWrapper</pre>
        component.
      </li>
      <li>
        Update the placeholder value of the
        <pre>featureKey</pre>
        prop with your actual feature flag key.
      </li>
      <li>
        Once you've updated the key, if the feature flag is turned on, the below feature will be
        displayed.
      </li>
    </ol>
    <section class="section">
      <UsingFeatureWrapper />
    </section>
  </div>
</template>

<script setup lang="ts">
import UsingFeatureWrapper from '@/components/UsingFeatureWrapper.vue'
</script>
