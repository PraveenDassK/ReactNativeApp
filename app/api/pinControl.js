import { create } from "apisauce";

const environment = "demo"
const realm = "test"

const api = create({
  baseURL: `https://integration-api-cat2.${environment}.ext.${realm}.cia.enfuce.com/pincontrol`,
  auth: {
    username: 'carbonyte_test_demo_apiuser',
    password: 'yAo8dvc*B6pDgfGcYQae_z!Hgndhv.MN'
  },
  headers: {
    'Content-Type': 'application/json'
},
})
  const id = 38759312
  const cardId = 714613712 // 46359612 // 38759312 // 687942912 // 714613712

const getAccessToken = async (plasticId) => {
  try {
    const response = await api.post(
      `https://integration-api-cat2.${environment}.ext.${realm}.cia.enfuce.com/pincontrol/v2/plastic/714613712/?auditUser=`, 
      {
        "scope": "SET_PIN",
      },

    );

    console.log('getToken', response.ok, response.status, response.problem, response)
    // const { id, pinURL, pinFrameURL } = response.data;
    // console.log('pin response',id, pinURL, pinFrameURL)
    // Handle the response and perform the necessary actions
    // For mobile webview, instruct the device to make a POST call to pinURL
    // For desktop browser flow, open the pinFrameURL and handle the iframe behavior
    // You can store the 'id', 'pinURL', and 'pinFrameURL' in your component's state or context for later use

    // const pinURLResponse = await api.post(pinURL)
    // console.log('pinURLRes',pinURLResponse)

    return 
  } catch (error) {
    // Handle error
    console.error("Error requesting access token:", error);
  }
};

export default { getAccessToken };
