import axios from "axios";
import { API_URL } from "../../api";
import { ResetPasswordFormValues } from "types";

export const resetPassword = async (
  resetPasswordFormValues: ResetPasswordFormValues,
) =>
  await axios.post(`${API_URL}/auth/reset-password`, resetPasswordFormValues);
