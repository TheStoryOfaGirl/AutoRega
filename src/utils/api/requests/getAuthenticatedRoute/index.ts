import { api, API_URL } from "../../api";

export const getAuthenticatedRoute = async () =>
  await api.get(`${API_URL}/auth/authenticated-route`);
