import { Navigate } from "react-router-dom";
import { URLS } from "../../const";
import { getToken } from "@utils";

type PrivateRouteNoAuthProps = {
  children: JSX.Element;
};

function PrivateRouteNoAuth({
  children,
}: PrivateRouteNoAuthProps): JSX.Element {
  return !getToken("accessToken") ? (
    children
  ) : (
    <Navigate to={URLS.MAIN_AUTH} replace={true} />
  );
}

export default PrivateRouteNoAuth;
