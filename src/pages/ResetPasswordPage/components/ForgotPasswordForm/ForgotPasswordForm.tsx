import { Typography, TextField, Button } from "@mui/material";
import styles from "./ForgotPasswordForm.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { usePostForgotPasswordMutation } from "@utils";
import { ErrorMessage, Loader } from "@shared";
import { ForgotPasswordFormValues } from "types";

export const ForgotPasswordForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>();
  const [isSubmit, setIsSubmit] = useState(false);
  const { mutate, isSuccess, isPending, error } =
    usePostForgotPasswordMutation();
  const onSubmit = (data: ForgotPasswordFormValues) => {
    mutate(data);
  };
  return (
    <>
      <div className={styles.p_info}>
        <Typography>
          Введите почту, вам придёт ссылка для <br />
          сброса пароля.
        </Typography>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        onFocus={() => setIsSubmit(false)}
      >
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
        <Button
          variant="contained"
          disableElevation
          className={styles.btn_auth}
          onClick={() => setIsSubmit(true)}
          type="submit"
        >
          Далее
        </Button>
      </form>
      <ErrorMessage error={error} />
      {isPending && <Loader />}
      {isSubmit && isSuccess && (
        <div className={styles.container_message}>
          <Typography>
            Проверьте почту. Сообщение может находиться в папке спам. Если
            ссылка не пришла, убедитесь в правильности написания электронной
            почты.
          </Typography>
        </div>
      )}
    </>
  );
};
