import { Typography } from "@mui/material";
import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.container}>
      <Typography>Загрузка</Typography>
      <span className={styles.loader}></span>
    </div>
  );
};
