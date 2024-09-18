import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../const";
import styles from "./AuthMainPage.module.css";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userAtom } from "./User.atom";
import mem from './../../assets/img/mem.jpg'
import { dropToken, useGetUserQuery, usePostLogoutMutation } from "@utils";

export const AuthMainPage = () => {
  const navigate = useNavigate();
  const { mutate } = usePostLogoutMutation();
  const { data, isSuccess } = useGetUserQuery();
  const [user, setUser] = useRecoilState(userAtom);

  const handleClickLogout = async () => {
    mutate(undefined, {
      onSuccess: () => {
        dropToken("accessToken");
        dropToken("refreshToken");
        navigate(URLS.MAIN);
      },
    });
  };

  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  const handleBackButton = () => {
    window.history.pushState(null, document.title, window.location.href);
  };

  useEffect(() => {
    if (isSuccess) {
      setUser({ name: data.data.name });
    }
  }, [isSuccess, setUser, data?.data.name]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Typography>{`Поздравляем, ${user.name}!`}</Typography>
          <Typography>Вы успешно вошли в систему.</Typography>
          <img src={mem} />
          <Typography>
            Если хотите попробовать другие способы авторизации или ещё раз
            зарегистрироваться, <br />
            выйдите из системы по кнопке ниже.
          </Typography>
          <Button
            variant="contained"
            disableElevation
            className={styles.btn_reg}
            onClick={handleClickLogout}
          >
            Выйти
          </Button>
        </div>
      </div>
    </>
  );
};
