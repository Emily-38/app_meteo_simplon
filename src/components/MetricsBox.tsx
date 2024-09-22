
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";
import { hour } from "@/services/formate_date";

export const MetricsBox = ({ weatherData, unitSystem }:any) => {
  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Humidity"}
        iconSrc={"/icons/humidity.png"}
        metric={weatherData.current.relative_humidity_2m}
        unit={weatherData.current_units.relative_humidity_2m}
      />
      <MetricsCard
        title={"Wind speed"}
        iconSrc={"/icons/wind.png"}
        metric={ weatherData.current.wind_speed_10m}
        unit={weatherData.current_units.wind_speed_10m}
      />
      <MetricsCard
        title={"Wind direction"}
        iconSrc={"/icons/compass.png"}
        metric={weatherData.current.wind_direction_10m}    
        unit={weatherData.current_units.wind_direction_10m}  />
      <MetricsCard
        title={"Visibility"}
        iconSrc={"/icons/binocular.png"}
        metric={weatherData.current.visibility}
        unit={weatherData.current_units.visibility}
      />
       <MetricsCard
        title={"Sunrise"}
        iconSrc={"/icons/sunrise.png"}
        metric={hour(weatherData.daily.sunrise[0])}
        unit={""}
      />
      <MetricsCard
        title={"Sunset"}
        iconSrc={"/icons/sunset.png"}
        metric={hour(weatherData.daily.sunset[0])}
        unit={""}
      />  
    </div>
  );
};
