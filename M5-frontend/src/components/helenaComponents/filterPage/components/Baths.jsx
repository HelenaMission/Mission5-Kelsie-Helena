import { useState, useEffect } from 'react';

export default function Baths({ onBathSelect }) {
  const [baths, setBaths] = useState(['1', '2', '3', '4', '5', '6+']);
  const [selectedBaths, setSelectedBaths] = useState([]);

  const handleBathClick = (bath) => {
        setSelectedBaths(bath);
  }
  
  useEffect(() => {
    onBathSelect(selectedBaths);
  }, [selectedBaths, onBathSelect]);

  return (
    <div className='absolute left-[889px] top-[508px]'>
      <div className="text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
        Bathrooms
        <div className='flex space-x-1'>
          {baths.map((bath) => (
            <div className='w-[37.34px] h-9 bg-white justify-start items-start inline-flex' key={bath}>
              <div
                key={bath}
                className={`w-[37.34px] h-9 px-5 py-3 bg-white border justify-center items-center gap-2.5 flex
                ${selectedBaths.includes(bath) ? 'border-red-500' : 'border-stone-500'}
                ${bath === '1' ? 'rounded-l-[10px]' : ''}
                ${bath === '6+' ? 'rounded-r-[10px]' : ''}`}
              >
                <button
                  onClick={() => handleBathClick(bath)}
                  className={`text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide
                  ${selectedBaths.includes(bath) ? 'text-red-500' : 'text-stone-500'}
                  `}
                >
                  {bath}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
