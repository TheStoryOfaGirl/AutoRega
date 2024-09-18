import { useMutation } from "@tanstack/react-query";
import { logout } from "../requests";

export const usePostLogoutMutation = () =>
  useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
  });
