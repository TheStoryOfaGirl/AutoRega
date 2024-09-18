import { Button, TextField, Typography } from "@mui/material";
import styles from "./AuthCodeForm.module.css";
import { URLS } from "../../../../../const";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {
  saveToken,
  usePostLoginEmailCodeMutation,
  usePostLoginEmailMutation,
} from "@utils";
import { ErrorMessage } from "@shared";
import { AuthCodeFormValues } from "types";

export const AuthCodeForm = () => {
  const navigate = useNavigate();
  const [isRepeatCode, setIsRepeat] = useState(false);
  const repeatSendingCode = () => {
    setTimeout(() => {
      setIsRepeat(true);
    }, 30000);
  };
  const location = useLocation();
  const isPhone = location.pathname.includes("phone");
  const email = location.state.email;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthCodeFormValues>();

  const { mutate, error, reset } = usePostLoginEmailCodeMutation();
  const { mutate: sendEmail } = usePostLoginEmailMutation();
  const handleRepeatCodeClick = () => {
    sendEmail({ email });
    reset();
  };
  const onSubmit = (data: AuthCodeFormValues) => {
    mutate(
      { ...data, email },
      {
        onSuccess: (response) => {
          saveToken("accessToken", response.data.access_token);
          saveToken("refreshToken", response.data.refresh_token);
          navigate(URLS.MAIN_AUTH, {
            replace: true,
            state: { from: "main-auth" },
          });
        },
      },
    );
  };

  useEffect(() => {
    repeatSendingCode();
  });

  return (
    <>
      <form
        onFocus={() => reset()}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.code_form}
      >
        <Typography>
          Вам {isPhone ? `в смс-сообщении` : `на почту`} пришёл код
          подтверждения. <br /> Введите его в поле ниже.
        </Typography>
        <TextField
          {...register("code", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          error={!!errors.code}
          label="Код подтверждения"
          variant="outlined"
          className={styles.field}
          helperText={errors.code?.message}
        />
        {isRepeatCode && (
          <div className={styles.repeat_code}>
            <Typography onClick={handleRepeatCodeClick}>
              Отправить код ещё раз
            </Typography>
          </div>
        )}
        <div className={styles.error}>
          <ErrorMessage error={error} />
        </div>
        <Button
          variant="contained"
          disableElevation
          className={styles.btn_auth}
          type="submit"
        >
          Войти
        </Button>
      </form>
    </>
  );
};
