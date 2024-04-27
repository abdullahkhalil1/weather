import { useEffect, useState } from "react"
import { CloudSnow } from "phosphor-react"
import Dropdown from "../components/core/DropDown"
import i18n from '../translations/i18n'
import { useTranslation } from "react-i18next"
import { useLang } from "../hooks/useLang"

export const Header = () => {
    const { t } = useTranslation('weather');
    const isArabic = useLang()
    const selectedLang = sessionStorage.getItem('lang')
    const options = [{ name: t('arabic'), value: 'ar' }, { name: t('english'), value: 'en' }]

    const [selectedOption, setSelectedOption] = useState()

    useEffect(() => {
        const selectedLangOption = selectedLang ? options.find(option => option.value === selectedLang) : options[1];
        setSelectedOption(selectedLangOption);
    }, [i18n.language]);

    const handleSelectionChange = (option) => {
        // setSelectedOption(option)
        sessionStorage.setItem('lang', option.value)
        i18n.changeLanguage(option.value);
    }

    return (
        <header className="bg-[#1c1d1e] py-2 px-6" dir={isArabic && 'rtl'}>
            <div className="text-white flex justify-between items-center">
                <div className=" flex items-center gap-3">
                    <CloudSnow size={50} weight="fill" color="#6fa3eb" />
                    <span className="text-white font-medium tracking-wide text-lg">{t('myWeather')}</span>
                </div>
                <Dropdown options={options} selectedOption={selectedOption} setSelectedOption={handleSelectionChange} />
            </div>
        </header>
    )
}