import { Navigate } from "react-router-dom";
import { URLS } from "../../const";
import { useGetAuthenticatedRouteQuery } from "@utils";
import { Loader } from "@shared";

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const { isSuccess, isPending } = useGetAuthenticatedRouteQuery();
  if (isPending) return <Loader />;
  return isSuccess ? children : <Navigate to={URLS.MAIN} />;
}

export default PrivateRoute;
