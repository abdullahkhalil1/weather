import { useCallback, useState } from "react";
import { MagnifyingGlass } from "phosphor-react"
import { debounce } from "../../utils/debounce"
import { useTranslation } from "react-i18next";

export const SearchInput = ({ setQuery }) => {
    const { t } = useTranslation('weather')
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = useCallback(debounce((e) => setQuery(e.target.value), 1000), []);

    return (
        <div className="relative">
            <input
                type="text"
                value={searchValue}
                setSearchValue={setSearchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyUp={handleSearch}
                placeholder={t('searchLocation')}
                className="px-4 py-2 w-full rounded-lg bg-bgPrimary text-white placeholder:text-textGray focus:outline-none focus:border-indigo-500"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <MagnifyingGlass size={24} color="white" />
            </div>
        </div>
    )
}