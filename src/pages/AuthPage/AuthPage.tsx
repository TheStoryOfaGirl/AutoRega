import { useLocation } from "react-router-dom";
import { URLS } from "../../const";
import { AuthForm, RegistrationForm } from "./components";

const AuthPage = () => {
  const location = useLocation();
  const isRegister = location.pathname === URLS.REGISTER;

  return <>{isRegister ? <RegistrationForm /> : <AuthForm />}</>;
};

export default AuthPage;
