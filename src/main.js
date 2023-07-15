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
  SDKKey: "gnLbCJ_nhUCGHl1SZNyC5Q/V794nqFnpkWY_7TuhXTaOw", // SDKKey is required
  pollingMode: 'auto', // default is 'auto' same as "configcat.PollingMode.AutoPoll" Specify the polling mode as a string
  clientOptions: { // clientOptions is optional
    pollIntervalSeconds: 5, // Use the pollIntervalSeconds option parameter to change the polling interval.
    logger: logger, // logger is not required and is optional
  },
});

app.mount('#app');
