import { Suspense, useState } from "react";
import { format, subDays } from "date-fns";
import { WeatherCard } from "../../components/weather/WeatherCard"
import { ForecastCard } from "../../components/weather/ForecastCard";
import { WeatherDetails } from "../../components/weather/WeatherDetails";
import { forecastModes } from "../../constants/forecastMode";
import { Error } from "../../components/core/Error";
import { SearchInput } from "../../components/core/SearchInput";
import { handleApiErrors } from "../../utils/handleApiErrors";
import { useCurrentWeather, useWeatherHistory, useLang } from "../../hooks";
import { Loader } from "../../components/core/Loader";

export const Weather = () => {
    const [forecastMode, setForecastMode] = useState(forecastModes.FUTURE)
    const [query, setQuery] = useState('');
    const isPreviousForecastMode = forecastModes.PREVIOUS === forecastMode;
    const startDate = format(subDays(new Date(), 7), 'yyyy-MM-dd');
    const endDate = format(new Date(), 'yyyy-MM-dd');
    const isArabic = useLang()

    const { currentWeatherData, forecastWeatherData, isError, error, isLoading: isCurrentWeatherLoading } = useCurrentWeather(query);
    const { weatherHistoryData, isLoading: isWeatherHistoryLoading } = useWeatherHistory({ startDate, endDate, isPreviousForecastMode, query })
    const { temp, icon, description, country, city, time, sunriseTime, sunsetTime, humidity, windSpeed, feelsLike, pressure } = currentWeatherData || {};
    const forecastDays = isPreviousForecastMode ? weatherHistoryData?.reverse() : forecastWeatherData;

    if (isCurrentWeatherLoading) return <Loader />

    return (
        <>
            <div className="flex justify-end w-full mb-4">
                <SearchInput setQuery={setQuery} />
            </div>
            {isError ? <Error errorMessage={handleApiErrors(error?.response.data.error.code)} /> :
                <div className="flex flex-col md:flex-row gap-4" dir={isArabic && 'rtl'}>
                    <div className="w-full md:w-1/3">
                        <WeatherCard
                            temp={temp}
                            icon={icon}
                            description={description}
                            country={country}
                            city={city}
                            time={time}
                            sunriseTime={sunriseTime}
                            sunsetTime={sunsetTime}
                        />
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-2/3">
                        <ForecastCard isLoading={isWeatherHistoryLoading} forecastDays={forecastDays} setForecastMode={setForecastMode} forecastMode={forecastMode} />
                        <WeatherDetails humidity={humidity} windSpeed={windSpeed} feelsLike={feelsLike} pressure={pressure} />
                    </div>
                </div>
            }
        </>

    )
}