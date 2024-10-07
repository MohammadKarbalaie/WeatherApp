export interface WeatherData {
    descp: string;
    temp: number;
    city: string;
    humidity: number;
    press: number;
    icon: string;
  }
  

  export interface CallWeatherProps {
    setWeather: (weather: WeatherData) => void;
  }
  
 
  export interface WeatherUIProps {
      weather: WeatherData | null;  
      apiCall: (city: string) => Promise<void>;  
  }
  