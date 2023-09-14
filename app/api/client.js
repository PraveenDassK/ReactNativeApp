import { create } from "apisauce";
import axios from "axios";
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.apiUrl,
  headers: { Accept: "application/vnd.github.v3+json" },
});

const environment = "demo";
const realm = "test";

export const enfuceClient = create({
  baseURL: `https://integration-api-cat2.${environment}.ext.${realm}.cia.enfuce.com/`,
});

const jwt =
  "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJEYXRhIjoie1wiQ3VzdG9tZXJJZFwiOlwiQ0MxMTMxXCIsXCJFbWFpbFwiOlwicmVudmljay5mQGVuaWdtYS10ZWNoLmlvXCIsXCJQaG9uZU51bWJlclwiOlwiNzc4ODU1MjIzM1wifSIsImV4cCI6MTY5NDcwMjA3MCwiaXNzIjoiQ2FyYm9ueXRlIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMyJ9.RCQkibUPG5rlRyb0_De09hORuKG720kRyxdWW0oFpEwvxyfSkjnLzwjdxzVflREa4XNQdm05q16Q-tqMRGzV1w";
export const jwtClient = create({
  baseURL: settings.apiUrl,
  headers: {
    Accept: "*/*",
    // Authorization: `Bearer ${jwt}`, // Add the JWT to the Authorization header
    carboyteauthorizer: jwt, // Passing the JWT to the  header
  },
});

export default apiClient;
