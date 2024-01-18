import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// IMPORT THE PLUGIN: (REQUIRED) - Import the plugin
import { ConfigCatPlugin } from 'configcat-vue'

// POLLING MODE AND LOGGER: (OPTIONAL) - Import if you need to customize the polling mode or logger
import { PollingMode, createConsoleLogger, LogLevel } from 'configcat-vue'

const app = createApp(App)

app.use(router)

app.use(ConfigCatPlugin, {
  sdkKey: 'YOUR-CONFIGCAT-SDK-KEY', // sdkKey is required
  pollingMode: PollingMode.AutoPoll, // Optional. Default is AutoPoll
  clientOptions: {
    logger: createConsoleLogger(LogLevel.Info), // Optional. Default is LogLevel.None
    pollIntervalSeconds: 5 // Optional. Default is 60 seconds
  }
})

app.mount('#app')
