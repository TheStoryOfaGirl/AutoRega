import axios from "axios";
import { API_URL } from "../../api";
import { ForgotPasswordFormValues } from "types";

export const forgotPassword = async (
  resetPasswordFormValues: ForgotPasswordFormValues,
) =>
  await axios.post(`${API_URL}/auth/forgot-password`, resetPasswordFormValues);
