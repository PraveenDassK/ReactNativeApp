import { create } from "apisauce";
import qs from 'qs';
import { format as prettyFormat } from "pretty-format"; //development only
import { string } from "yup";

const environment = "demo";
const realm = "test";

const api = create({
  baseURL: `https://integration-api-cat2.${environment}.ext.${realm}.cia.enfuce.com/pincontrol`,
  auth: {
    username: "carbonyte_test_demo_apiuser",
    password: "yAo8dvc*B6pDgfGcYQae_z!Hgndhv.MN",
  },
  headers: {
    "Content-Type": "application/json",
  },
});

// 714613712 // 46359612 // 38759312 // 687942912 // 714613712// Physical Card2 ID: 715767812 46765612

const getAccessToken = async (plasticId) => {
  try {
    const response = await api.post(
      `https://integration-api-cat2.${environment}.ext.${realm}.cia.enfuce.com/pincontrol/v2/plastic/${plasticId}/?auditUser=cc1`,
      {
        scope: "VIEW_PIN",
      }
    );

    const { pinURL, id } = response.data;

    console.log(
      "getToken",
      response.ok,
      response.status,
      prettyFormat(response.data),
      prettyFormat(pinURL)
    );

    const formData = qs.stringify({ controlId: id });

    const headers = {
      Accept: 'text/html',
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const pinURLResponse = await api.post(
      `${pinURL}?controlId=${id}`,
      {controlId: id},
      { headers }
    );
    console.log("pinURLRes", prettyFormat(pinURLResponse ));

    return pinURLResponse.data

    // const { id, pinURL, pinFrameURL } = response.data;
    // console.log('pin response',id, pinURL, pinFrameURL)
    // Handle the response and perform the necessary actions
    // For mobile webview, instruct the device to make a POST call to pinURL
    // For desktop browser flow, open the pinFrameURL and handle the iframe behavior
    // You can store the 'id', 'pinURL', and 'pinFrameURL' in your component's state or context for later use

    // const pinURLResponse = await api.post(pinURL)
    // console.log('pinURLRes',pinURLResponse)

    return;
  } catch (error) {
    // Handle error
    console.error("Error requesting access token:", error);
  }
};

export default { getAccessToken };
