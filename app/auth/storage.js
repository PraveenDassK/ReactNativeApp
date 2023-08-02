import * as SecureStore from "expo-secure-store";

const key = "authToken";
const settingsKey = "securityAndPrivacy";
const accountKey = "limits";
const passcodeKey = "passcode";
const colorTheme = "themeColor";
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    
  }
};

const storeColor = async (color) => {
  
  try {
    await SecureStore.setItemAsync(colorTheme, color);
  } catch (error) {
    
  }
};

const getColor = async () => {
  try {
    
    const result = await SecureStore.getItemAsync(colorTheme);
  
    return result;
  } catch (error) {
    
  }
};

const removeColor = async () => {
  try {
    await SecureStore.deleteItemAsync(colorTheme);
  } catch (error) {
    
  }
};

const storeSignInSetting = async (authSignIn) => {
  try {
    
    await SecureStore.setItemAsync(settingsKey, authSignIn);
  } catch (error) {
    
  }
};

const getSignInSettings = async () => {
  try {
    
    const result = await SecureStore.getItemAsync(settingsKey);

    
    return result;
  } catch (error) {
    
  }
};

const removeSignInSetting = async () => {
  try {
    
    await SecureStore.deleteItemAsync(settingsKey);
  } catch (error) {
    
  }
};

const storeLimits = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await SecureStore.setItemAsync(accountKey, jsonValue);
  } catch (error) {
    
  }
};

const getLimits = async () => {
  try {
    return await SecureStore.getItemAsync(accountKey);
  } catch (error) {
    
  }
};

const storePasscode = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await SecureStore.setItemAsync(passcodeKey, jsonValue);
  } catch (error) {
    
  }
};

const getPasscode = async () => {
  try {
    return await SecureStore.getItemAsync(passcodeKey);
  } catch (error) {
    
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
  storePasscode,
  getPasscode,
  storeColor,
  getColor,
  removeColor,
};

// import jwtDecode from "jwt-decode";

// const key = "authToken";

// const storeToken = async (authToken) => {
//   try {
//     await SecureStore.setItemAsync(key, authToken);
//   } catch (error) {
//     
//   }
// };

// const getToken = async () => {
//   try {
//     return await SecureStore.getItemAsync(key);
//   } catch (error) {
//     
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
//     
//   }
// };

// export default { getToken, getUser, removeToken, storeToken };
