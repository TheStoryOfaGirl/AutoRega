import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { register } from "../requests";
import { RegistrationFormValues } from "types";

export const usePostRegisterMutation = () =>
  useMutation<
    AxiosResponse<any, any>,
    AxiosError<any, any>,
    RegistrationFormValues,
    unknown
  >({
    mutationKey: ["register"],
    mutationFn: (registrationFormValues: RegistrationFormValues) =>
      register(registrationFormValues),
  });
