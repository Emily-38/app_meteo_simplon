import axios from "axios";
export async function GetWeather(lat, lon,language){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json',
        },
    }
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&language=${language}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m,visibility&daily=sunrise,sunset`
    return axios.get(
        url, axiosConfig
    )
}