import { Button, TextField } from "@mui/material";
import styles from "./AuthEmailForm.module.css";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../../../../const";
import { useForm } from "react-hook-form";
import { usePostLoginEmailMutation } from "@utils";
import { ErrorMessage, Loader } from "@shared";
import { AuthEmailFormValues } from "types";

export const AuthEmailForm = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthEmailFormValues>();
  const { mutate, isPending, error, reset } = usePostLoginEmailMutation();

  const onSubmit = (data: AuthEmailFormValues) => {
    mutate(data, {
      onSuccess: () => {
        navigate(URLS.AUTH.EMAIL_CODE, { state: { email: data.email } });
      },
    });
  };
  if (isPending) return <Loader />;
  return (
    <>
      <form
        onFocus={() => reset()}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.auth_email_form}
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
        <div className={styles.error}>
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
