import axios from 'axios';
import { CallWeatherProps } from './types';


function useCallWheather({ setWeather }: CallWeatherProps) {
    const apiKey: string = '6640f904052d9b03f1efd12fce643e70';

    const apiCall = async (city: string) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        console.log(url);

        try {
            const res = await axios.get(url);
            console.log(res.data);

            const iconcode = res.data.weather[0].icon;
            const iconUrl: string = `https://openweathermap.org/img/w/${iconcode}.png`;

            setWeather({
                descp: res.data.weather[0].description,
                temp: res.data.main.temp,
                city: res.data.name,
                humidity: res.data.main.humidity,
                press: res.data.main.pressure,
                icon: iconUrl,
            });
        } catch (error) {
            console.error("Error fetching the weather data", error);
        }
    };

    return { apiCall };  
}

export default useCallWheather;
