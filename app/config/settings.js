import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://api.carbonyte.io",
  },
  staging: {
    apiUrl: "https://api.carbonyte.io",
  },
  prod: {
    apiUrl: "https://api.carbonyte.io",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
