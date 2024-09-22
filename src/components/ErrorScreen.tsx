import styles from "./ErrorScreen.module.css";

export const ErrorScreen = ({ errorMessage, children }: {errorMessage: any, children: any}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.message}>{errorMessage}</h1>
      {children}
    </div>
  );
};
