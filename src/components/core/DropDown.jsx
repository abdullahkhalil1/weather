import React, { useRef, useState } from 'react';
import { CaretDown } from 'phosphor-react';
import { classNames } from '../../utils/classNames';
import { useOnClickOutside, useLang } from '../../hooks';

const Dropdown = ({ options, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isArabic = useLang();

  const dropdownRef = useRef()

  useOnClickOutside(dropdownRef, () => setIsOpen(false))

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="bg-white text-gray-700 text-xs font-medium rounded-lg inline-flex gap-2 py-1 px-2 items-center"
        onClick={(e) => (e.stopPropagation(), toggleDropdown())}
      >
        {selectedOption ? selectedOption.name : 'Select an option'}
        <CaretDown weight='fill' size='18' />
      </button>
      {isOpen && (
        <div className={classNames("origin-top-right absolute mt-2 w-56 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5", isArabic ? 'left-0' : 'right-0')}>
          <div ref={dropdownRef} className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options?.map((option, index) => (
              <button
                key={index}
                className="block px-2 py-1 text-xs text-gray-700 hover:bg-gray-100 w-full text-left"
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
