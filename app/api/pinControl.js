import { enfuceClient as api } from "./client";

const getAccessToken = async (plasticId) => {
  try {
    const response = await api.post(`/v2/plastic/${plasticId}`);
    const { id, pinURL, pinFrameURL } = response.data;
    console.log('pin response',id. pinURL, pinFrameURL)
    // Handle the response and perform the necessary actions
    // For mobile webview, instruct the device to make a POST call to pinURL
    // For desktop browser flow, open the pinFrameURL and handle the iframe behavior
    // You can store the 'id', 'pinURL', and 'pinFrameURL' in your component's state or context for later use

    const pinURLResponse = await api.post(pinURL)
    console.log('pinURLRes',pinURLResponse)

    return 
  } catch (error) {
    // Handle error
    console.error("Error requesting access token:", error);
  }
};

export default { getAccessToken };
