import axios from "axios";
export async function GetCity(cityInput){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json',
        },
    }
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}&count=1&language=fr&format=json`
    return axios.get(
        url, axiosConfig
    )
}