import { Button } from "@mui/material";
import styles from "./AuthButtons.module.css";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../const";

export const AuthButtons = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.buttons}>
        <Button
          variant="outlined"
          disableElevation
          className={styles.btn_auth}
          onClick={() => navigate(URLS.AUTH.EMAIL)}
        >
          Почту
        </Button>
        <Button
          variant="outlined"
          disableElevation
          className={styles.btn_auth}
          onClick={() => navigate(URLS.AUTH.PASSWORD)}
        >
          Логин и пароль
        </Button>
      </div>
    </>
  );
};
