import axios from "axios";
import { dropToken, getToken, saveToken } from "./token";

export const API_URL = "http://84.201.149.59:8000/api/v1";

export const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = getToken("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = { ...error.config };

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = getToken("refreshToken");
        const response = await axios.post(`${API_URL}/auth/refresh`, {
          refresh_token: refreshToken,
        });
        saveToken("accessToken", response.data.access_token);
        saveToken("refreshToken", response.data.refresh_token);
        return api.request(originalRequest);
      } catch {
        dropToken("accessToken");
        dropToken("refreshToken");
      }
    }

    throw error;
  },
);
