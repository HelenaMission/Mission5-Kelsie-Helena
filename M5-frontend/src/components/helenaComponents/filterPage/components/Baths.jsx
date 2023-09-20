import { useState, useEffect } from 'react';

export default function Baths({ onBathSelect }) {
  const [baths, setBaths] = useState(['1', '2', '3', '4', '5', '6+']);
  const [selectedBaths, setSelectedBaths] = useState([]);

  const handleBathClick = (bath) => {
    if (selectedBaths.includes(bath)) {
      setSelectedBaths(selectedBaths.filter((selected) => selected !== bath));
    } else {
      setSelectedBaths([...selectedBaths, bath]);
    }
  }

  useEffect(() => {
    onBathSelect(selectedBaths);
  }, [selectedBaths, onBathSelect]);

  return (
    <div className='absolute left-[1119px] top-[268px]'>
      <div className="text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-loose">
        Bathrooms
        <div className='flex space-x'>
          {baths.map((bath) => (
              <div
                key={bath}
                className={`w-12 h-12 px-5 py-3 bg-white border justify-center items-center gap-2.5 flex
                ${selectedBaths.includes(bath) ? 'border-red-500' : 'border-stone-500'}
                ${bath === '1' ? 'rounded-l-[10px]' : ''}
                ${bath === '6+' ? 'rounded-r-[10px]' : ''}`}
              >
                <button
                  onClick={() => handleBathClick(bath)}
                  className={`text-base font-normal leading-normal tracking-wide
                  ${selectedBaths.includes(bath) ? 'text-red-500' : 'text-stone-500'}
                  `}
                >
                  {bath}
                </button>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
