import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UsingFeatureWrapperView from '@/views/UsingFeatureWrapperView.vue'
import UsingConfigCatClientView from '@/views/UsingConfigCatClientView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/using-feature-wrapper',
      component: UsingFeatureWrapperView
    },
    {
      path: '/using-configcat-client',
      component: UsingConfigCatClientView
    }
  ]
})

export default router
