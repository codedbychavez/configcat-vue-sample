import { createApp } from 'vue';
import App from './App.vue';
import '../assets/main.css';

import { ConfigCatPlugin } from 'configcat-vue';

// If you need to use a logger
// install and import configcat-js (npm package) as shown below

import * as configcat from 'configcat-js'; // Optional import - Do this if you're using the logger
const logger = configcat.createConsoleLogger(configcat.logLevel.info); // Create a binding for the logger and specify the log level. 

// documentation: https://configcat.com/docs/sdk-reference/js/#logging

const app = createApp(App);

app.use(ConfigCatPlugin, {
  SDKKey: "gnLbCJ_nhUCGHl1SZNyC5Q/V794nqFnpkWY_7TuhXTaOw", // SDKKey is required
  pollingMode: 'auto', // default is 'auto'. Accepted values: 'auto', 'manual', 'lazy'. Learn more: https://configcat.com/docs/sdk-reference/js/#polling-modes
  clientOptions: { // clientOptions is optional
    pollIntervalSeconds: 5, // Use the pollIntervalSeconds to change the polling interval (how often the ConfigCat SDK should download your feature flags and setting values).
    logger: logger, // logger is optional
  },
});

app.mount('#app');
