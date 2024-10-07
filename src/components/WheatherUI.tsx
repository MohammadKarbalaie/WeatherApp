import { FormEvent, useState } from 'react';
import { WeatherUIProps } from './types';

function WeatherUI({ weather, apiCall }: WeatherUIProps) {
    const [city, setCity] = useState('');       

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (city) {
            apiCall(city);  
        }
    };

    return (
        <div className="flex flex-col gap-4 items-center justify-center bg-purple-500 text-white w-96 px4 py-2 rounded-lg">
            <div>
                <h1 className="text-2xl font-semibold bg-indigo-500 px-24 py-2 mt-2 rounded-2xl">آب و هوای <p>{weather?.city}</p></h1>
            </div>
            <div className="w-72 rounded-lg">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="py-2 px-6 rounded-tl-xl rounded-bl-xl text-black uppercase" 
                        value={city}
                        onChange={(e) => setCity(e.target.value)} 
                        placeholder="Enter city" 
                    />
                    <button className="bg-white px-4 py-2 text-black rounded-tr-xl rounded-br-xl" type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
                
            </div>
            {weather && (
                <div>
                    <div className='flex items-center justify-center'>
                        <img src={weather.icon} alt="weather icon" width={140} />
                    </div>
                    <div className='pt-6 font-semibold text-lg uppercase'>
                        {weather && (
                        <div className="text-xl">{weather.descp} : توضیحات</div>
                        )}
                    </div>
                    <div className="flex gap-4 items-center justify-center pt-8 pb-2 font-semibold text-lg">
                        <div>{weather.humidity}% : رطوبت</div>
                        <div>{weather.press} hPa : فشار</div>
                        <div>{weather.temp} °C : دما</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WeatherUI;
