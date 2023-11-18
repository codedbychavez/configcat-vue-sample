# configcat-vue-sample

Sample app for the **configcat-vue** npm package:

**[https://github.com/codedbychavez/configcat-vue](https://github.com/codedbychavez/configcat-vue)**

## Project setup

1. Clone this repo

2. Install dependencies

```sh
npm install
```

3. Run the app

```sh
npm run dev
```

## Configure the app

1. If you haven't already, create a free account at [https://app.configcat.com/signup](https://app.configcat.com/signup).

2. Create a feature flag in your ConfigCat Dashboard.

3. Copy your **SDK Key** from the ConfigCat Dashboard.

4. Open `src/main.js` and replace `YOUR-CONFIGCAT-SDK-KEY` with your actual SDK Key.

5. Open `src/App.vue` and replace `YOUR-FEATURE-KEY` with your actual feature flag key:

```vue
<FeatureWrapper
featureKey="YOUR-FEATURE-KEY"
:userObject="state.userObject"
@flag-value-change="handleFlagValueChange"
>
    <TheNewFeature />
</FeatureWrapper>
```

6. Save the file and refresh the app. If you've configured everything correctly, you should see the `<TheNewFeature />` component if the feature is enabled.

## Documentation

For more information on how to use the ConfigCat SDK, please visit the official documentation:

<https://configcat-vue.netlify.app/>
