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
import styles from "./RegistrationForm.module.css";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { URLS } from "../../../../const";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePostRegisterMutation } from "@utils";
import { ErrorMessage } from "@shared";
import { RegistrationFormValues } from "types";

export const RegistrationForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    mode: "onSubmit",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const { mutate, error } = usePostRegisterMutation();
  const onSubmit = async (data: RegistrationFormValues) => {
    mutate(data, {
      onSuccess: () => {
        navigate(URLS.AUTH_CHOICE);
      },
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Typography>Регистрация</Typography>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <TextField
              error={!!errors.name}
              {...register("name", {
                required: {
                  value: true,
                  message: "Поле обязательно для заполнения",
                },
                minLength: {
                  value: 2,
                  message: "Минимальная длина должна быть 2",
                },
                maxLength: {
                  value: 32,
                  message: "Максимальная длина должна быть 32",
                },
              })}
              label="Имя"
              variant="outlined"
              helperText={errors.name?.message}
            />
            <TextField
              error={!!errors.phone}
              {...register("phone", {
                required: {
                  value: true,
                  message: "Поле обязательно для заполнения",
                },
                pattern: {
                  value: /^\+\d{1,15}$/i,
                  message: "Введите корректный номер телефона",
                },
              })}
              label="Телефон"
              variant="outlined"
              helperText={errors.phone?.message}
            />
            <TextField
              error={!!errors.email}
              {...register("email", {
                required: {
                  value: true,
                  message: "Поле обязательно для заполнения",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Введите корректный адрес электронной почты",
                },
              })}
              label="Email"
              variant="outlined"
              helperText={errors.email?.message}
            />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Пароль
              </InputLabel>
              <OutlinedInput
                error={!!errors.password}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Поле обязательно для заполнения",
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
            <ErrorMessage error={error} />
            <Button
              variant="contained"
              disableElevation
              className={styles.btn_auth}
              type="submit"
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
