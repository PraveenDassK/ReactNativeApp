import client from "./client";

const endpointSingle = "/ecomodule/Earthly/GetProjectById?companyId=5f96f967a3a85800118be4d1";

const getListingsSingle = (ID) => client.get("https://api.carbonyte.io/ecomodule/Earthly/GetProjectById?projectId=5f96f967a3a85800118be4d1");

export default {
    getListingsSingle
  };
