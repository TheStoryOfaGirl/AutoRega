import { Typography } from "@mui/material";
import { AxiosError } from "axios";
import styles from "./ErrorMessage.module.css";
import { ERROR_TRANSLATOR } from "../../const";

export type AxiosErrorData = {
  [index: string]: string[];
};

export type ErrorDetail = string | string[];

export type ErrorMessageProps = {
  error?: AxiosError<AxiosErrorData, any> | null;
};

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  const errorDetail: ErrorDetail = error?.response?.data.detail as ErrorDetail;
  return (
    <>
      {error && errorDetail && (
        <div className={styles.errors}>
          {Array.isArray(errorDetail) &&
            errorDetail.map((error) => {
              if (ERROR_TRANSLATOR[error])
                return (
                  <Typography key={error} className={styles.error}>
                    {ERROR_TRANSLATOR[error]}
                  </Typography>
                );
            })}
          {typeof errorDetail === "string" && ERROR_TRANSLATOR[errorDetail] && (
            <Typography className={styles.error}>
              {ERROR_TRANSLATOR[errorDetail]}
            </Typography>
          )}
        </div>
      )}
    </>
  );
};
