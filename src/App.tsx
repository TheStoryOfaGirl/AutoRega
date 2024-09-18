import "./App.css";
import { Route, Routes } from "react-router-dom";
import { URLS } from "./const";
import HistoryRouter from "./components/HistoryRoute/HistoryRoute";
import browserHistory from "./utils/browserHistory/browserHistory";
import PrivateRouteNoAuth from "./components/PrivateRouteNoAuth/PrivateRouteNoAuth";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthPage from "@pages/AuthPage/AuthPage";
import { NotFoundPage } from "@pages/NotFoundPage/NotFoundPage";
import { NoAuthMainPage } from "@pages/NoAuthMainPage/NoAuthMainPage";
import { AuthChoicePage } from "@pages/AuthChoicePage/AuthChoicePage";
import { AuthMainPage } from "@pages/AuthMainPage/AuthMainPage";
import { ResetPasswordPage } from "@pages/ResetPasswordPage/ResetPasswordPage";

function App() {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={URLS.MAIN}
          element={
            <PrivateRouteNoAuth>
              <NoAuthMainPage />
            </PrivateRouteNoAuth>
          }
        />
        <Route
          path={URLS.AUTH_CHOICE}
          element={
            <PrivateRouteNoAuth>
              <AuthChoicePage />
            </PrivateRouteNoAuth>
          }
        />
        <Route
          path={URLS.MAIN_AUTH}
          element={
            <PrivateRoute>
              <AuthMainPage />
            </PrivateRoute>
          }
        />
        <Route
          path={URLS.AUTH.EMAIL}
          element={
            <PrivateRouteNoAuth>
              <AuthPage />
            </PrivateRouteNoAuth>
          }
        />
        <Route
          path={URLS.AUTH.PASSWORD}
          element={
            <PrivateRouteNoAuth>
              <AuthPage />
            </PrivateRouteNoAuth>
          }
        />
        <Route
          path={URLS.AUTH.PHONE}
          element={
            <PrivateRouteNoAuth>
              <AuthPage />
            </PrivateRouteNoAuth>
          }
        />
        <Route
          path={URLS.REGISTER}
          element={
            <PrivateRouteNoAuth>
              <AuthPage />
            </PrivateRouteNoAuth>
          }
        />
        <Route
          path={URLS.AUTH.EMAIL_CODE}
          element={
            <PrivateRouteNoAuth>
              <AuthPage />
            </PrivateRouteNoAuth>
          }
        />
        <Route
          path={URLS.AUTH.PHONE_CODE}
          element={
            <PrivateRouteNoAuth>
              <AuthPage />
            </PrivateRouteNoAuth>
          }
        />
        <Route
          path={URLS.RESET_PASSWORD.FORGOT}
          element={
            <PrivateRouteNoAuth>
              <ResetPasswordPage />
            </PrivateRouteNoAuth>
          }
        />
        <Route
          path={URLS.RESET_PASSWORD.RESET}
          element={
            <PrivateRouteNoAuth>
              <ResetPasswordPage />
            </PrivateRouteNoAuth>
          }
        />
        <Route path={URLS.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
