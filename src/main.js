import { createApp } from 'vue';
import App from './App.vue';

import { ConfigCatPlugin } from 'configcat-vue';

const app = createApp(App);

app.use(ConfigCatPlugin, {
  sdkKey: "YOUR-CONFIGCAT-SDK-KEY"
})

app.mount('#app');
