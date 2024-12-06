This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Set Up Environment Variables

This app requires API keys for the following platforms:

API Ninjas
OpenWeatherMap
Instructions to Get API Keys
API Ninjas:

Sign up or log in to API Ninjas.
Navigate to the API Keys section to generate a key.
Copy the API key.
OpenWeatherMap:

Sign up or log in to OpenWeatherMap.
Navigate to API Keys in your dashboard.
Generate an API key and copy it.

Create a .env File
In the root directory of the project, create a file named .env and define your API keys:

env
Copy code
GEOCODING_URL=https://api.api-ninjas.com/v1/geocoding
GEOCODING_API_KEY=your_api_ninjas_api_key
OPEN_WEATHER_MAP_URL=https://api.openweathermap.org/data/2.5/weather
OPEN_WEATHER_MAP_API_KEY=your_openweathermap_api_key

Declare Environment Variables
If you are using TypeScript, update the @env module declaration:

typescript
Copy code
declare module '@env' {
export const GEOCODING_URL: string;
export const GEOCODING_API_KEY: string;
export const OPEN_WEATHER_MAP_URL: string;
export const OPEN_WEATHER_MAP_API_KEY: string;
}

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start --reset-cache

# OR using Yarn
yarn start --reset-cache
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

Atomic Design Structure
This project follows the Atomic Design methodology to organize components for better scalability:

Atoms: Basic UI elements.
Molecules: Groups of atoms .
Organisms: Complex UI sections.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
