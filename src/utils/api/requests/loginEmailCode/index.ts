import axios from "axios";
import { API_URL } from "../../api";
import { AuthCodeFormValues } from "types";

export const loginEmailCode = async (authCodeFormValues: AuthCodeFormValues) =>
  await axios.post(`${API_URL}/auth/login-email-code`, authCodeFormValues);
