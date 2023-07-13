<template>
  <!-- The contents in this file will be move to the documentation -->
  <section class="instructions">
    <div class="text-container">
      <h2>Quick Instructions for using the sample app</h2>
      <div>
          <p>
            1. Add your <b>ConfigCat SDK Key</b> to the <b>ConfigCatPlugin</b> in the <b>main.js</b> file.
            <p class="note">You'll need to <a href="https://app.configcat.com/auth/signup" target="_blank">signup for a free ConfigCat account</a> to obtain your SDK Key.</p>
          </p>
          <p>
            2. Add your <b>Feature Flag Key</b> as a prop to the imported <b>FeatureWrapper</b> component <b>App.vue</b> file.
            <p class="note">The <b>FeatureWrapper</b> component acts as a wrapper. You can use it to safely wrap a feature component that you wish control using its feature key (That can be passed as a prop, as mentioned above).</p>
            <p class="note">You can optionally pass a <a href="https://configcat.com/docs/sdk-reference/js/#user-object" target="_blank">User Object</a> prop to this component as well. The User Object is essential if you'd like to use ConfigCat's <a href="https://configcat.com/docs/advanced/targeting/" target="_blank">Targeting feature</a>.</p>
          </p>
        
      </div>

    </div>
  </section>
</template>

<style scoped>

.instructions {
  padding: 1rem 2rem;
  background-color: whitesmoke;
  border-radius: .5rem;
  width: 50rem;
}

p:not(:first-child) {
  margin-top: 2rem;
}

</style>