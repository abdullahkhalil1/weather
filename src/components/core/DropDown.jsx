import React, { useRef, useState } from 'react';
import { CaretDown, MagnifyingGlass } from 'phosphor-react';
import { classNames } from '../../utils/classNames';
import { useOnClickOutside, useLang } from '../../hooks';
import { useTranslation } from 'react-i18next';

const Dropdown = ({ options, selectedOption, setSelectedOption, searchValue, setSearchValue, isSearch, width }) => {
  const { t } = useTranslation('weather')
  const [isOpen, setIsOpen] = useState(false);
  const isArabic = useLang();

  const dropdownRef = useRef()

  useOnClickOutside(dropdownRef, () => setIsOpen(false))

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    isSearch && setSearchValue(option.name)
    setIsOpen(false);
  };

  return (
    <div className={classNames("relative", width && width)}>
      {isSearch ?
        <>
          <input
            type="text"
            value={searchValue}
            setSearchValue={setSearchValue}
            onClick={(e) => (e.stopPropagation(), setIsOpen(true))}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={t('searchLocation')}
            className="px-4 py-2 w-full rounded-lg bg-bgPrimary text-white placeholder:text-textGray focus:outline-none focus:border-indigo-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <MagnifyingGlass size={24} color="white" />
          </div>
        </> :
        <button
          className="bg-white text-gray-700 text-xs font-medium rounded-lg inline-flex gap-2 py-1 px-2 items-center"
          onClick={(e) => (e.stopPropagation(), toggleDropdown())}
        >
          {selectedOption ? selectedOption.name : 'Select an option'}
          <CaretDown weight='fill' size='18' />
        </button>
      }
      {isOpen && options?.length > 0 && (
        <div className={classNames("origin-top-right absolute mt-2 w-56 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5", isArabic ? 'left-0' : 'right-0')}>
          <div ref={dropdownRef} className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options?.map((option, index) => (
              <button
                key={index}
                className="block px-2 py-2 text-xs text-gray-700 border-b last:border-none hover:bg-gray-100 w-full text-left"
                onClick={() => handleOptionClick(option)}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
