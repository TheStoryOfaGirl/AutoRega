import { useQuery } from "@tanstack/react-query";
import { getAuthenticatedRoute } from "../requests";

export const useGetAuthenticatedRouteQuery = () =>
  useQuery({
    queryKey: ["getAuthenticatedRoute"],
    queryFn: () => getAuthenticatedRoute(),
    staleTime: 0,
    gcTime: 1000,
  });
