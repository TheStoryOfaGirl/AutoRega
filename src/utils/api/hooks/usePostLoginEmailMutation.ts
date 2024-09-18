import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { loginEmail } from "../requests";
import { AuthEmailFormValues } from "types";

export const usePostLoginEmailMutation = () =>
  useMutation<
    AxiosResponse<any, any>,
    AxiosError<any, any>,
    AuthEmailFormValues,
    unknown
  >({
    mutationKey: ["login-email"],
    mutationFn: (authEmailFormValues: AuthEmailFormValues) =>
      loginEmail(authEmailFormValues),
  });
