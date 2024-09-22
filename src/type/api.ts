
export type cityTypes ={
    name:string,
    latitude: number,
    longitude: number
    country:string
    
}
export type weatherType ={
current:{ 
    apparent_temperature: number
    interval: number
    precipitation: number
    relative_humidity_2m: number
    temperature_2m: number
    time: string
    weather_code: number 
    wind_speed_10m: number
    wind_direction_10m:number
    visibility: number
}
current_units:{
    apparent_temperature: string
    interval: string
    precipitation: string
    relative_humidity_2m: string
    temperature_2m: string
    time: string
    weather_code: string
    wind_direction_10m: string
    wind_speed_10m: string
}
daily:{
    sunrise:string[]
    sunset:string[]
}
}