<template>
  <section class="the-new-feature">
    <div class="text-container">
      <div class="newsletter">
        <h3 class="title">Get weekly updates straight to your inbox</h3>
        <form @submit.prevent="handleFormSubmit" class="newsletter-form">
          <div class="flex-container">
            <div class="form-group">
              <input
                v-model="state.form.emailAddress"
                class="email-input"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="form-submit-button-wrapper">
              <button class="submit-button">Signup</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  form: {
    emailAddress: ''
  }
})

const handleFormSubmit = () => {
  console.log('Submitting the form')
}
</script>

<style scoped>
.newsletter {
  background-color: whitesmoke;
  padding: 1rem 2rem;
  max-width: 50rem;
  text-align: center;
}

.flex-container {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.email-input {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  border: 1px solid #e2e8f0;
}

.submit-button {
  padding: 0.5rem 1.5rem;
  background-color: #6366f1;
  border: none;
  font-weight: bold;
  color: whitesmoke;
}
</style>
