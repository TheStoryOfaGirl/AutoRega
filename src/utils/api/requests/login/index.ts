import axios from "axios";
import { API_URL } from "../../api";
import { AuthPasswordFormValues } from "types";

export const login = async (authPasswordFormValues: AuthPasswordFormValues) =>
  await axios.postForm(`${API_URL}/auth/login`, authPasswordFormValues, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
