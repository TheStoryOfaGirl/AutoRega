import axios from "axios";
import { API_URL } from "../../api";
import { AuthEmailFormValues } from "types";

export const loginEmail = async (authEmailFormValues: AuthEmailFormValues) =>
  await axios.post(`${API_URL}/auth/login-email`, authEmailFormValues);
