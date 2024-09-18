import { Typography } from "@mui/material";
import styles from "./ResetPasswordPage.module.css";
import { useLocation } from "react-router-dom";
import { ForgotPasswordForm, ResetPasswordForm } from "./components";

export const ResetPasswordPage = () => {
  const location = useLocation();
  const isReset = location.pathname.includes("reset");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Typography>Сброс пароля</Typography>
          {isReset ? <ResetPasswordForm /> : <ForgotPasswordForm />}
        </div>
      </div>
    </>
  );
};
