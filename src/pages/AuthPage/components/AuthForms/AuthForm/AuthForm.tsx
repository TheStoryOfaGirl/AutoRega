import { Typography } from "@mui/material";
import { AuthVariant } from "../../../../../types";
import styles from "./AuthForm.module.css";
import { AuthEmailForm } from "../AuthEmailForm/AuthEmailForm";
import { AuthPasswordForm } from "../AuthPasswordForm/AuthPasswordForm";
import { AuthCodeForm } from "../AuthCodeForm/AuthCodeForm";

export const AuthForm = () => {
  const authVariant: AuthVariant = location.pathname.substring(
    6,
  ) as AuthVariant;

  const getAuthFormVariant = () => {
    switch (authVariant) {
      case "email":
        return <AuthEmailForm />;
      case "password":
        return <AuthPasswordForm />;
      default:
        return <AuthCodeForm />;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Typography>Авторизация</Typography>
          {getAuthFormVariant()}
        </div>
      </div>
    </>
  );
};
