import { useTranslation } from 'react-i18next'

export const useLang = () => {
  const { i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'
  return isArabic
}
