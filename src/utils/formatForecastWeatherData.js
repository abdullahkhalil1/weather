import { format, isSameDay } from "date-fns";

export const formatForecastWeatherData = (weatherData) => {
    if (weatherData) {
        return weatherData.forecast.forecastday?.map((forecast) => ({
            date: forecast.date,
            day: isSameDay(new Date(), new Date(forecast.date)) ? 'Today' : format(new Date(forecast.date), 'EEEE'),
            avgTemp: forecast.day.avgtemp_c,
            maxTemp: forecast.day.maxtemp_c,
            minTemp: forecast.day.mintemp_c,
            description: forecast.day.condition.text,
            icon: forecast.day.condition.icon
        }))
    } else {
        return [];
    }
}