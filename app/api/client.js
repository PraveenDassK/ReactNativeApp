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

const jwt = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJEYXRhIjoie1wiQ3VzdG9tZXJJZFwiOlwiQ0MxXCIsXCJFbWFpbFwiOlwiamFjay5oQGNhcmJvbnl0ZS5pb1wiLFwiUGhvbmVOdW1iZXJcIjpcIjc5MjcyMDE2NDlcIn0iLCJleHAiOjE2OTA1NDE3NDYsImlzcyI6IkNhcmJvbnl0ZSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjUwMDMifQ.bo4wOc0lWMDh8tK4u7QoIfE2_ggGo-7LYkW89yO7GoFzc9U3VnOpOrYIeQM0ro4S7BfYKGRsrdaEJCqFWJiycg";
export const jwtClient = create({
  baseURL: settings.apiUrl,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `${jwt}`, // Add the JWT to the Authorization header
  },
})

export default apiClient;
