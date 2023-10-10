import { createApp } from 'vue';
import App from './App.vue';
import '../assets/main.css';

import { ConfigCatPlugin } from "configcat-vue";

// If you need to customize ConfigCat-related logging, import createConsoleLogger and LogLevel as well.

import { createConsoleLogger, LogLevel } from "configcat-vue";

const logger = createConsoleLogger(LogLevel.Info); // Create a binding for the logger and specify the log level.

// documentation: https://configcat.com/docs/sdk-reference/js/#logging

const app = createApp(App);

app.use(ConfigCatPlugin, {
  SDKKey: "YOUR-CONFIGCAT-SDK-KEY", // SDKKey is required
  pollingMode: 'auto', // default is 'auto'. Accepted values: 'auto', 'manual', 'lazy'. Learn more: https://configcat.com/docs/sdk-reference/js/#polling-modes
  clientOptions: { // clientOptions is optional
    pollIntervalSeconds: 5, // Use the pollIntervalSeconds to change the polling interval (how often the ConfigCat SDK should download your feature flags and setting values).
    logger: logger, // logger is optional
  },
});

app.mount('#app');
