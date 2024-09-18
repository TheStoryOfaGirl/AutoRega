import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../requests";
import { AxiosError, AxiosResponse } from "axios";
import { ForgotPasswordFormValues } from "types";

export const usePostForgotPasswordMutation = () =>
  useMutation<
    AxiosResponse<any, any>,
    AxiosError<any, any>,
    ForgotPasswordFormValues,
    unknown
  >({
    mutationKey: ["forgot-password"],
    mutationFn: (forgotPasswordFormValues: ForgotPasswordFormValues) =>
      forgotPassword(forgotPasswordFormValues),
  });
