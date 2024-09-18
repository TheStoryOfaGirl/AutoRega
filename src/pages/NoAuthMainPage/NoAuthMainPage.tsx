import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../const";
import styles from "./NoAuthMainPage.module.css";
import { AuthButtons } from "@shared";

export const NoAuthMainPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Typography>Добро пожаловать в Pet-проект АвтоРега!</Typography>
          <Typography>
            Здесь вы можете попробовать зарегистрироваться или авторизоваться в
            системе.
          </Typography>
          <Typography>
            Авторизоваться можно 2 способами! Через почту или
            <span style={{ fontStyle: "italic" }}> *классика*</span> - логин и
            пароль.
          </Typography>
          <Typography>{`Выбирай, на чьей стороне ты.`}</Typography>
          <div className={styles.choice_container}>
            <Button
              variant="contained"
              disableElevation
              className={styles.btn_reg}
              onClick={() => navigate(URLS.REGISTER)}
            >
              Зарегистрироваться
            </Button>
            <Typography>ИЛИ</Typography>
            <Typography>Авторизоваться через</Typography>
            <AuthButtons />
          </div>
        </div>
      </div>
    </>
  );
};
