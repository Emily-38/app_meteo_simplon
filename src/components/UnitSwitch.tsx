import styles from "./UnitSwitch.module.css";

export const UnitSwitch = ({ onClick, unitSystem }:any) => {
  return (
    <div className={styles.wrapper}>
      <p
        className={`${styles.switch} ${
          unitSystem == "fr" ? styles.active : styles.inactive
        }`}
        onClick={onClick}
      >
        Metric System
      </p>
      <p
        className={`${styles.switch} ${
          unitSystem == "fr" ? styles.inactive : styles.active
        }`}
        onClick={onClick}
      >
        Imperial System
      </p>
    </div>
  );
};
