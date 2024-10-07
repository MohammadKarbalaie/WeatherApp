import { useState, FormEvent } from 'react';  
import axios from 'axios';  

interface WeatherData {  
    descp: string;  
    temp: number;  
    city: string;  
    humidity: number;  
    press: number;  
    icon: string;  
}  

function CallWheather() {  
    const [weather, setWeather] = useState<WeatherData | null>(null);  
    const [city, setCity] = useState<string>('');  
    const apiKey: string = '6640f904052d9b03f1efd12fce643e70';  

    const apiCall = async (e: FormEvent<HTMLFormElement>) => {  
        e.preventDefault();  
        const loc = (e.target as HTMLFormElement).elements.namedItem('loc') as HTMLInputElement;  
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc.value}&appid=${apiKey}`;  
        
        try {  
            const res = await axios.get(url);  
            const iconcode = res.data.weather[0].icon;  
            const iconUrl: string = `https://openweathermap.org/img/w/${iconcode}.png`; 

            setWeather({  
                descp: res.data.weather[0].description,  
                temp: res.data.main.temp,  
                city: res.data.name,  
                humidity: res.data.main.humidity,  
                press: res.data.main.pressure,  
                icon: iconUrl 
            });  
            setCity(res.data.name);  
        } catch (error) {  
            console.error("Error fetching the weather data", error);  
        }  
    };  

   
    const k = weather?.temp;  
    const C = k ? k - 273.15 : 0;  

    return (  
        <>  
            <div className="h-[350px] grid grid-rows-5 gap-4 items-center mx-auto justify-center bg-purple-500 text-white w-96 px-4 py-2 rounded-lg">  
                <div><h1 className='text-2xl font-semibold bg-indigo-500 px-32 py-2'>Weather</h1></div>  
                <div className='w-full rounded-lg '>  
                    <form onSubmit={apiCall} className="form w-full flex justify-center items-center">  
                        <input type="text" className='py-1 px-6 rounded-tl-xl text-black rounded-bl-xl' name='loc' />  
                        <button className='bttn bg-white px-4 py-1 text-black rounded-tr-xl rounded-br-xl' type="submit">  
                            <i className='fa fa-search'></i>  
                        </button>  
                    </form>  
                </div>  
                <div className='-mt-8 font-semibold text-lg'>  
                    <p >{city} : شهر </p>  
                </div>  
                <div>  
                    {weather && (  
                        <>  
                            <div className='w-24 mx-auto pb-8'><img className="weather-icon" src={weather.icon} alt="Weather icon" width={100}/></div>
                            {/* <p>{weather.descp}</p>   */}
                        </>  
                    )}  
                </div>  
                <div className='flex gap-4 items-center justify-center font-semibold text-lg'>  
                    <div className='flex flex-col-reverse items-center justify-center gap-1 px-4 bg-indigo-400 rounded-full mb-4'> <p>{weather?.humidity} %</p> <p>: رطوبت</p></div>  
                    <div className='flex flex-col-reverse items-center justify-center gap-1 px-4 bg-indigo-400 rounded-full mb-4'><p>{weather?.press} mb</p> <p>: فشار</p></div>  
                    <div className='flex flex-col-reverse items-center justify-center gap-1 px-4 bg-indigo-400 rounded-full mb-4'><p>{C.toFixed(2)} &#8451; </p><p>: دما</p></div>  
                </div>  
            </div>  
        </>  
    );  
}  

export default CallWheather;