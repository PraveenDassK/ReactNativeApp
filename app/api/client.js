import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.apiUrl,
  headers: { Accept: 'application/vnd.github.v3+json' },
});

const environment = "demo"
const realm = "test"

export const enfuceClient = create({
  baseURL: `https://integration-api-cat2.${environment}.ext.${realm}.cia.enfuce.com/`,
 
})

export default apiClient;
