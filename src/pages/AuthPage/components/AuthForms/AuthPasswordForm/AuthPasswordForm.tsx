import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./AuthPasswordForm.module.css";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URLS } from "../../../../../const";
import { useForm } from "react-hook-form";
import { saveToken, usePostLoginMutation } from "@utils";
import { ErrorMessage } from "@shared";
import { AuthPasswordFormValues } from "types";

export const AuthPasswordForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthPasswordFormValues>();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { mutate, error } = usePostLoginMutation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const onSubmit = (data: AuthPasswordFormValues) => {
    mutate(data, {
      onSuccess: (response) => {
        saveToken("accessToken", response.data.access_token);
        saveToken("refreshToken", response.data.refresh_token);
        navigate(URLS.MAIN_AUTH, {
          replace: true,
          state: { from: "main-auth" },
        });
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextField
          {...register("username", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          error={!!errors.username}
          label="Логин"
          variant="outlined"
          helperText={errors.username?.message}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            error={!!errors.password}
            {...register("password", {
              required: {
                value: true,
                message: "Поле обязательно для заполнения",
              },
              minLength: {
                value: 3,
                message: "Пароль должен быть минимум 3 символа",
              },
            })}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {error && (
          <div className={styles.error}>
            <ErrorMessage error={error} />
          </div>
        )}
        <Link to={URLS.RESET_PASSWORD.FORGOT} className={styles.link}>
          <Typography>Забыли пароль?</Typography>
        </Link>
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
