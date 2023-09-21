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
  };

  useEffect(() => {
    onBathSelect(selectedBaths);
  }, [selectedBaths, onBathSelect]);

  return (
    <div className='absolute left-[1119px] top-[268px]'>
      <div className="text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-loose">
        Bathrooms
        <div className='flex mt-2'>
          {baths.map((bath) => (
              <button
                onClick={() => handleBathClick(bath)}
                key={bath}
                className={`w-12 h-12 bg-white border justify-center items-center flex text-base font-normal 
                ${
                  selectedBaths.includes(bath)
                    ? 'border-2 border-red-600 text-red-600'
                    : 'border-stone-500 text-stone-500'
                }
                ${bath === '1' ? 'rounded-l-[10px]' : ''}
                ${bath === '6+' ? 'rounded-r-[10px]' : ''}`}
              >
                {bath}
              </button>
          ))}
        </div>
      </div>
    </div>
  );
}
