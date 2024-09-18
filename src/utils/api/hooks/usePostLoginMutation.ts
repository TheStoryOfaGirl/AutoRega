import { useMutation } from "@tanstack/react-query";
import { login } from "../requests";
import { AxiosError, AxiosResponse } from "axios";
import { AuthPasswordFormValues } from "types";

export const usePostLoginMutation = () =>
  useMutation<
    AxiosResponse<any, any>,
    AxiosError<any, any>,
    AuthPasswordFormValues,
    unknown
  >({
    mutationKey: ["login"],
    mutationFn: (authPasswordFormValues: AuthPasswordFormValues) =>
      login(authPasswordFormValues),
  });
