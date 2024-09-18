import { Typography } from "@mui/material";
import styles from "./AuthChoicePage.module.css";
import { AuthButtons } from "@shared";

export const AuthChoicePage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Typography>Выбери способ авторизации</Typography>
          <Typography>Авторизоваться через</Typography>
          <AuthButtons />
        </div>
      </div>
    </>
  );
};
