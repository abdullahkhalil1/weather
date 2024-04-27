import { useState } from 'react';

export const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div className="absolute z-10 px-2 py-1 bg-gray-700 text-white text-xs rounded-md shadow-lg text-nowrap">
          {text}
        </div>
      )}
    </div>
  );
};
