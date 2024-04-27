import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import i18n from '../../translations/i18n'
import { Card } from '../core/Card';
import { forecastModes } from '../../constants/forecastMode';
import { Carousel } from '../core/Carousel';
import { useEffect, useState } from 'react';
import Dropdown from '../core/DropDown';
import { Spinner } from '../core/Spinner';


export const ForecastCard = ({ forecastDays, forecastMode, setForecastMode, isLoading }) => {
    const { t } = useTranslation('weather')
    const forecastOptions = [{ name: t('previousDays'), value: forecastModes.PREVIOUS }, { name: t('nextDays'), value: forecastModes.FUTURE }]
    const [selectedOption, setSelectedOption] = useState()

    const handleSelectionChange = (option) => {
        setSelectedOption(option)
        setForecastMode(option.value)
    }

    useEffect(() => {
        const selectedOption = forecastMode ? forecastOptions.find(option => option.value === forecastMode) : forecastOptions[1];
        setSelectedOption(selectedOption);
    }, [i18n.language]);

    return (
        <Card
            title={t('weatherForecast')}
            otherOptions={
                <Dropdown options={forecastOptions} selectedOption={selectedOption} setSelectedOption={handleSelectionChange} />
            }
            gradientBackgroundDir='bg-gradient-to-tr'
            fromColor='#1c1d1e'
            viaColor='#101112'
            toColor='transparent'
        >
            {isLoading ?
                <div className='flex w-full justify-center'>
                    <Spinner />
                </div>
                :
                <Carousel items={forecastDays.map((item) => (
                    <div key={item.date} className="flex flex-col gap-2 mt-4 w-1/2 md:w-1/3 justify-center items-center">
                        <span className='text-textGray font-medium'>{t(`${item.day.toLowerCase()}`)}</span>
                        <img src={item.icon} alt='forecast-image' className='w-16 h-16' />
                        <div className='flex flex-col justify-center items-center'>
                            <span className="text-textLightGray text-xs">
                                {format(new Date(item.date), 'yyyy-MM-dd')}
                            </span>
                            <div className='mt-1'>
                                <span className="text-textLightGray text-3xl">
                                    {item.avgTemp}
                                </span>
                                <span className="ml-2 text-textLightGray text-xl">
                                    &deg;C
                                </span>

                            </div>
                        </div>
                    </div>
                ))} />
            }
        </Card>
    )
}