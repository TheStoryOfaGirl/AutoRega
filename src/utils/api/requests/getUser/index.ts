import { api, API_URL } from "../../api";

export const getUser = async () => await api.get(`${API_URL}/users/me`);
