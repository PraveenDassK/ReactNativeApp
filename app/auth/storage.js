import * as SecureStore from "expo-secure-store";

const key = "authToken";
const settingsKey = "securityAndPrivacy";
const accountKey = "limits";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

const storeSignInSetting = async (authSignIn) => {
  try {
    console.log("auth store", authSignIn);
    await SecureStore.setItemAsync(settingsKey, authSignIn);
  } catch (error) {
    console.log("Error storing the auth sign in", error);
  }
};

const getSignInSettings = async () => {
  try {
    console.log("auth get", settingsKey);
    const result = await SecureStore.getItemAsync(settingsKey);

    console.log("auth get 2", result);
    return result;
  } catch (error) {
    console.log("Error getting the auth sign in", error);
  }
};

const removeSignInSetting = async () => {
  try {
    console.log("auth remove", settingsKey);
    await SecureStore.deleteItemAsync(settingsKey);
  } catch (error) {
    console.log("Error removing the auth sign in", error);
  }
};

const storeLimits = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await SecureStore.setItemAsync(accountKey, jsonValue);
  } catch (error) {
    console.log("Error storing the account limit", error);
  }
};

const getLimits = async () => {
  try {
    return await SecureStore.getItemAsync(accountKey);
  } catch (error) {
    console.log("Error getting the account limit", error);
  }
};

export default {
  getToken,
  removeToken,
  storeToken,
  getSignInSettings,
  storeSignInSetting,
  removeSignInSetting,
  storeLimits,
  getLimits,
};

// import jwtDecode from "jwt-decode";

// const key = "authToken";

// const storeToken = async (authToken) => {
//   try {
//     await SecureStore.setItemAsync(key, authToken);
//   } catch (error) {
//     console.log("Error storing the auth token", error);
//   }
// };

// const getToken = async () => {
//   try {
//     return await SecureStore.getItemAsync(key);
//   } catch (error) {
//     console.log("Error getting the auth token", error);
//   }
// };

// const getUser = async () => {
//   const token = await getToken();
//   return token ? jwtDecode(token) : null;
// };

// const removeToken = async () => {
//   try {
//     await SecureStore.deleteItemAsync(key);
//   } catch (error) {
//     console.log("Error removing the auth token", error);
//   }
// };

// export default { getToken, getUser, removeToken, storeToken };
