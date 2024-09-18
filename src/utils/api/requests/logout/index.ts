import { api, API_URL } from "../../api";

export const logout = async () => await api.post(`${API_URL}/auth/logout`);
