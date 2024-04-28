import { useGetWeather } from "../apis/weather";
import { format } from 'date-fns';
import { formatForecastWeatherData } from "../utils/formatForecastWeatherData";

export const useCurrentWeather = (searchValue) => {
    const { data: weatherData, isError, isLoading, error } = useGetWeather(searchValue)
    const today = format(new Date(), 'yyyy-MM-dd')

    const formateCurrentWeatherData = () => {
        if (weatherData) {
            const { wind_kph, temp_c, humidity, feelslike_c, pressure_mb, condition, last_updated } = weatherData.current;
            const { icon, text } = condition;
            const { country, name } = weatherData.location;
            const todayForecast = weatherData.forecast.forecastday?.find(day => day.date === today)
            return {
                windSpeed: wind_kph,
                temp: temp_c,
                humidity,
                pressure: pressure_mb,
                feelsLike: feelslike_c,
                icon,
                description: text,
                country,
                city: name,
                time: format(new Date(last_updated), "dd MMMM, yyyy h:mm a"),
                sunriseTime: todayForecast?.astro.sunrise,
                sunsetTime: todayForecast?.astro.sunset,
            }
        } else {
            return {}
        }
    }

    return {
        currentWeatherData: formateCurrentWeatherData(),
        forecastWeatherData: formatForecastWeatherData(weatherData),
        error,
        isError,
        error,
        isLoading
    }
}