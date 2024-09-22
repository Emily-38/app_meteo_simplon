'use client'
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { MainCard } from "@/components/MainCard";
import { ContentBox } from "@/components/ContentBox";
import { Header } from "@/components/Header";
import { LoadingScreen } from "@/components/LoadingScreen";
import { DateAndTime } from "@/components/DateAndTime";
import { Search } from "@/components/Search";
import { MetricsBox } from "@/components/MetricsBox";
import { UnitSwitch } from "@/components/UnitSwitch";
import { ErrorScreen } from "@/components/ErrorScreen";
import { cityTypes, weatherType } from "@/type/api";
import { GetCity } from "@/app/api/data"
import { GetWeather } from "@/app/api/weather"
import {getWeatherDescription, iconeWeather} from "@/services/weather_code"

export default function Home() {
  
    const [cityInput, setCityInput] = useState("Riga");
    const [triggerFetch, setTriggerFetch] = useState(true);
  
    const [cityData, setCityData] = useState<cityTypes>();
    const [weatherData,setWeatherData] = useState<weatherType>()
    const [unitSystem, setUnitSystem] = useState("fr");
  
    useEffect(() => {
    GetCity(cityInput).then((res :any)=>
      setTimeout(() => {
        setCityData(res.data.results[0])
      }, 2500)
      )
    }, [cityInput]);
   
    useEffect(() => { 
      if(!cityData){
        <LoadingScreen loadingMessage="Loading data..." />
    }else{ 
     GetWeather(cityData.latitude, cityData.longitude,unitSystem).then((res:any)=>
     setWeatherData(res.data))
    }}, [cityData, unitSystem])
    let description=""
    let weatherIcone=""
    if(!weatherData){
      <LoadingScreen loadingMessage="Loading data..." />
  }else{ 
     description = getWeatherDescription(weatherData.current.weather_code)
     weatherIcone = iconeWeather(weatherData.current.weather_code)}
    
    const changeSystem = () =>
      unitSystem == "fr"
        ? setUnitSystem("en")
        : setUnitSystem("fr");
        
    return weatherData  ? (
      <div className={styles.wrapper}>
        <MainCard
          city={cityData?.name}
          country={cityData?.country}
          description={description}
          weatherData={weatherData}
          iconName={`${weatherIcone}d.svg`}/>
        <ContentBox>
          <Header>
            <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
            <Search
              placeHolder="Search a city..."
              value={cityInput}
              onFocus={(e :any) => {
                e.target.value = "";
                e.target.placeholder = "";
              }}
              onChange={(e :any) => setCityInput(e.target.value)}
              onKeyDown={(e: any) => {
                e.keyCode === 13 && setTriggerFetch(!triggerFetch);
                e.target.placeholder = "Search a city...";
              }}
            />
          </Header>
          <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
          <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
        </ContentBox>
      </div>
    )
     : weatherData ? (
      <ErrorScreen errorMessage="City not found, try again!">
        <Search
            onFocus={(e: any) => (e.target.value = "")}
            onChange={(e: any) => setCityInput(e.target.value)}
            onKeyDown={(e: any) => e.keyCode === 13 && setTriggerFetch(!triggerFetch)} placeHolder={undefined} value={undefined}        />
      </ErrorScreen>
    ) : (
      <LoadingScreen loadingMessage="Loading data..." />
    );
  };

