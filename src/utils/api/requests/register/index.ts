import axios from "axios";
import { API_URL } from "../../api";
import { RegistrationFormValues } from "types";

export const register = async (
  registrationFormValues: RegistrationFormValues,
) => await axios.post(`${API_URL}/auth/register`, registrationFormValues);
