import {
  Typography,
  Button,
  OutlinedInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import styles from "./ResetPasswordForm.module.css";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { URLS } from "../../../../const";
import { usePostResetPasswordMutation } from "@utils";
import { ErrorMessage } from "@shared";
import { ResetPasswordFormValues } from "types";

export const ResetPasswordForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token") as string;
  const { mutate, error } = usePostResetPasswordMutation();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const onSubmit = (data: ResetPasswordFormValues) => {
    mutate(
      { ...data, token },
      {
        onSuccess: () => {
          navigate(URLS.AUTH.PASSWORD);
        },
      },
    );
  };

  return (
    <>
      <Typography className={styles.head_new_pass}>
        Выберите новый пароль и подтвердите его.
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.update_pass_form}
      >
        <FormControl variant="outlined" className={styles.new_pass}>
          <InputLabel htmlFor="outlined-adornment-password">
            Новый пароль
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
        <div>
          <ErrorMessage error={error} />
        </div>
        <Button
          variant="contained"
          disableElevation
          className={styles.btn_auth}
          type="submit"
        >
          Далее
        </Button>
      </form>
    </>
  );
};
