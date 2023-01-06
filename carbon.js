import client from "./client";

const endpoint = "/ecomodule/Earthly/GetProjectList";

const getListings = () => client.get(endpoint);

export default {
    getListings
  };