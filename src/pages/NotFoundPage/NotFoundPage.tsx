import { Typography } from "@mui/material";
import styles from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Typography>404</Typography>
        <Typography>Страница не найдена</Typography>
      </div>
    </>
  );
};
