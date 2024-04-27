import { useGetWeatherHistory } from "../apis/weather";
import { formatForecastWeatherData } from "../utils/formatForecastWeatherData";

export const useWeatherHistory = ({ startDate, endDate, isPreviousForecastMode, query }) => {
    const { data: weatherHistoryData, isLoading } = useGetWeatherHistory(query, startDate, endDate, isPreviousForecastMode)
    return { weatherHistoryData: formatForecastWeatherData(weatherHistoryData), isLoading }
}