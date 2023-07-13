import { createApp } from 'vue';
import App from './App.vue';
import '../assets/main.css';

import { ConfigCatPlugin } from 'configcat-vue';

/*
If you need to create a logger

install and import configcat-js (npm package) as shown below

documentation: https://configcat.com/docs/sdk-reference/js/#logging
*/

import * as configcat from 'configcat-js'; // Optional import - for logger
const logger = configcat.createConsoleLogger(3); // Optional - for logger

const app = createApp(App);

app.use(ConfigCatPlugin, {
  SDKKey: "YOUR-CONFIGCAT-SDK-KEY", // SDKKey is required
  clientOptions: { // clientOptions is optional
    pollIntervalSeconds: 95,
    logger: logger, // logger is not required and is optional
  }
});

app.mount('#app');
