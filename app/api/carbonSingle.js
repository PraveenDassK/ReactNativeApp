import client from "./client";

const endpointSingle = "/ecomodule/Earthly/GetProjectById?companyId=";

const getListingsSingle = (ID) => client.get(endpointSingle + ID);

export default {
    getListingsSingle
  };
