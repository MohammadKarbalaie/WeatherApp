import { useState } from 'react';
import useCallWheather from '../components/Wheather';  
import WeatherUI from '../components/WheatherUI';
import { WeatherData } from './types'

export function WeatherApp() {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const { apiCall } = useCallWheather({ setWeather });  

    return (
        <div>
            <WeatherUI weather={weather} apiCall={apiCall} />  
        </div>
    );
}
