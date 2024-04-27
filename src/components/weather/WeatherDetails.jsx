import { ChartBar, DropHalfBottom, Thermometer, Wind } from "phosphor-react"
import { useTranslation } from "react-i18next"
import { useLang } from "../../hooks/useLang"

export const WeatherDetails = ({ humidity, windSpeed, feelsLike, pressure }) => {
    const { t } = useTranslation('weather')
    const isArabic = useLang()
    const WeatherDetailsData = [
        {
            name: t('humidity'),
            value: `${isArabic ? `% ${humidity}` : `${humidity} %`}`,
            icon: <DropHalfBottom size={40} color="#6fa3eb" weight="duotone" />
        },
        {
            name: t('windSpeed'),
            value: `${windSpeed} ${t('km/hr')}`,
            icon: <Wind size={40} color="#6fa3eb" weight="duotone" />
        },
        {
            name: t('pressure'),
            value: `${pressure} ${t('mb')}`,
            icon: <ChartBar size={40} color="#6fa3eb" weight="duotone" />
        },
        {
            name: t('feelsLike'),
            value: `${feelsLike} °C`,
            icon: <Thermometer size={40} color="#6fa3eb" weight="duotone" />
        }
    ]
    return (
        <div className="text-white">
            <span className="text-textLightGray text-2xl">{t('weatherDetails')}</span>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-4">
                {WeatherDetailsData.map((item) => (
                    <div key={item.name} className="bg-bgPrimary p-3 flex justify-between items-center rounded-xl">
                        <span className='text-textGray text-lg font-medium'>{item.name}</span>
                        <div className="flex flex-col items-center">
                            {item.icon}
                            <span className="text-lg">{item.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}