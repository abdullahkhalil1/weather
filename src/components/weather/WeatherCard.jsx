import { useTranslation } from 'react-i18next';
import { Card } from '../core/Card';
import { CloudSun, SunHorizon } from 'phosphor-react';

export const WeatherCard = ({ temp, icon, description, country, city, time, sunriseTime, sunsetTime }) => {
    const { t } = useTranslation('weather')

    return (
        <Card
            title={`${country}, ${city}`}
            otherOptions={<span className='text-xs text-white font-medium'>{time}</span>}
            gradientBackgroundDir='bg-gradient-to-br'
            fromColor='#1c1d1e'
            viaColor='#101112'
            toColor='transparent'
        >
            <div className="flex flex-col">
                <img src={icon} alt="weather" className="w-24 h-24" />
                <div className="mb-3">
                    <span className="font-medium text-8xl">
                        {temp}
                    </span>
                    <span className="ml-2 text-xl">
                        &deg;C
                    </span>
                </div>
                <span className="text-xl text-textGray font-medium">{description}</span>
                <div className="bg-bgPrimary rounded-xl mt-4 p-3 flex flex-col">
                    <SunHorizon weight="fill" size={40} color='#eab308' />
                    <span className='text-textGray'>{t('sunrise')}</span>
                    <span>{sunriseTime}</span>
                </div>
                <div className="bg-bgPrimary rounded-xl mt-4 p-3 flex flex-col">
                    <CloudSun weight="fill" size={40} color="#ea580c" />
                    <span className='text-textGray'>{t('sunset')}</span>
                    <span>{sunsetTime}</span>
                </div>
            </div>
        </Card>
    )
}