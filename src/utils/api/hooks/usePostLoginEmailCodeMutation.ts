import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { loginEmailCode } from "../requests";
import { AuthCodeFormValues } from "types";

export const usePostLoginEmailCodeMutation = () =>
  useMutation<
    AxiosResponse<any, any>,
    AxiosError<any, any>,
    AuthCodeFormValues,
    unknown
  >({
    mutationKey: ["login-email-code"],
    mutationFn: (authCodeFormValues: AuthCodeFormValues) =>
      loginEmailCode(authCodeFormValues),
  });
