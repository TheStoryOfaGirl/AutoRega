import { useQuery } from "@tanstack/react-query";
import { getUser } from "../requests";

export const useGetUserQuery = () =>
  useQuery({
    queryKey: ["getUser"],
    queryFn: () => getUser(),
  });
