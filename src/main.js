import { createApp } from 'vue'
import App from './App.vue'

import { ConfigCatPlugin } from 'configcat-vue';

const app = createApp(App);

app.use(ConfigCatPlugin, {
  apiKey: "ScDaCD8ETUuG7wYo3BdP2A/5s96HBVckk-RzI-iVf-zRA"
})

app.mount('#app')
