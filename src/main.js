import { createApp } from 'vue';
import App from './App.vue';

import { ConfigCatPlugin } from 'configcat-vue';

/*
If you need to create a logger

install configcat-js (npm package) as shown below

documentation: https://configcat.com/docs/sdk-reference/js/#logging
*/

import * as configcat from 'configcat-js';
const logger = configcat.createConsoleLogger(3);

const app = createApp(App);

app.use(ConfigCatPlugin, {
  SDKKey: "ScDaCD8ETUuG7wYo3BdP2A/5s96HBVckk-RzI-iVf-zRA", // SDKKey is required
  clientOptions: { // clientOptions is optional
    pollIntervalSeconds: 95,
    logger: logger,
  }
});

app.mount('#app');
