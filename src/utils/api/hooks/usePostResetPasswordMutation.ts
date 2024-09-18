import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { resetPassword } from "../requests";
import { ResetPasswordFormValues } from "types";

export const usePostResetPasswordMutation = () =>
  useMutation<
    AxiosResponse<any, any>,
    AxiosError<any, any>,
    ResetPasswordFormValues,
    unknown
  >({
    mutationKey: ["reset-password"],
    mutationFn: (resetPasswordFormValues: ResetPasswordFormValues) =>
      resetPassword(resetPasswordFormValues),
  });
