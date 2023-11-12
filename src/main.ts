import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import { ConfigCatPlugin } from 'configcat-vue';

import { PollingMode, createConsoleLogger, LogLevel } from 'configcat-vue';

const app = createApp(App);

app.use(ConfigCatPlugin, {
    sdkKey: "YOUR-CONFIGCAT-SDKKEY", // sdkKey is required
    pollingMode: PollingMode.AutoPoll, // Optional. Default is AutoPoll
    clientOptions: {
        logger: createConsoleLogger(LogLevel.Info),
        pollIntervalSeconds: 5
    }
});

app.mount('#app');
