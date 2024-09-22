

import Image from "next/image";
import styles from "./MainCard.module.css";


export const MainCard = ({
  city,
  country,
  description,
  weatherData,
  iconName
}:any) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>{description}</p>
      <Image src={`/icons/${iconName}`} alt={"weather Icon"} width={300} height={300}/>
      <h1 className={styles.temperature}>
         {Math.round(weatherData.current.temperature_2m)}
       
      </h1>
      <p>
        Feels like{" "}
       {Math.round(weatherData.current.apparent_temperature)}
          
      </p>
    </div>
  );
};
