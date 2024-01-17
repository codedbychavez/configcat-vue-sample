<template>
  <div class="navigation-bar has-padding">
    <ul class="navigation-items container">
      <li class="navigation-item">
        <RouterLink to="/" active-class="active">
          Home
        </RouterLink>
      </li>
      <li class="navigation-item">
        <RouterLink to="/using-feature-wrapper" active-class="active">
          Example 1 - Using FeatureWrapper component
        </RouterLink>
      </li>
      <li class="navigation-item">
        <RouterLink to="/using-configcat-client" active-class="active"> Example 2 - Using ConfigCat client </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navigation-bar {
  font-family: 'Inter', sans-serif;
  height: min-content;
  background-color: #7985ab;
}

.navigation-items {
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}

.navigation-item a {
  font-weight: 500;
  font-size: 1.05rem;
  color: whitesmoke;
  text-decoration: none;
}

a.active {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: .4rem;
}

</style>
