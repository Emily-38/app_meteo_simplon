
import { formatDate } from "@/services/formate_date";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData , unitSystem }:any) => {
  return (
    <div className={styles.wrapper}>
      <h2>
      {formatDate(weatherData.current.time)}
      </h2>
    </div>
  );
};
