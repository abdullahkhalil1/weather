import { ArrowLeft, ArrowRight } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { useLang, useMobileView } from '../../hooks';
import { classNames } from '../../utils/classNames';

export const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMobileView()
  const isArabic = useLang()

  const itemsPerSlide = isMobile ? 2 : 3;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - itemsPerSlide));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(items.length - itemsPerSlide, prevIndex + itemsPerSlide));
  };

  useEffect(() => {
    if (currentIndex !== 0) {
      setCurrentIndex(0);
    }
  }, [items]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" >
        {items.slice(currentIndex, currentIndex + itemsPerSlide).map((item) => (
          item
        ))}
      </div>

      {currentIndex > 0 && (
        <button
          className={classNames("absolute top-0 bottom-0 z-10 text-white", isArabic ? 'right-0' : 'left-0')}
          onClick={handlePrevClick}
        >
          {isArabic ?
            <ArrowRight
              size={30}
              color="white"
            /> :
            <ArrowLeft
              size={30}
              color="white"
            />
          }
        </button>
      )}
      {currentIndex < items.length - itemsPerSlide && (
        <button
          className={classNames("absolute top-0 bottom-0 z-10 text-white", isArabic ? 'left-0' : 'right-0')}
          onClick={handleNextClick}
        >
          {isArabic ?
            <ArrowLeft
              size={30}
              color="white"
            /> :
            <ArrowRight
              size={30}
              color="white"
            />
          }
        </button>
      )}
    </div>
  );
};
