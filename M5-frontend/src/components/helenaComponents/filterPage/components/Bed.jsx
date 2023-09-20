import { useState, useEffect } from 'react';

export default function Bed({ onBedSelect }) {
  const [initialBeds, setInitialBeds] = useState(['1', '2', '3', '4', '5', '6+']);
  const [selectedBeds, setSelectedBeds] = useState([]);

  const handleBedClick = (bed) => {
    if (selectedBeds.includes(bed)) {
      setSelectedBeds(selectedBeds.filter((selected) => selected !== bed)); 
    } else {
      setSelectedBeds([...selectedBeds, bed]);
    } 
  }

    useEffect(() => {
      onBedSelect(selectedBeds);
    }, [selectedBeds, onBedSelect]);

    return (
      <div className='absolute left-[719px] top-[268px]'>
        <div className="text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-loose">
          Bedrooms
          <div className='flex space-x'>
            {initialBeds.map((bed) => (
                <div
                  key={bed}
                  className={`w-12 h-12 px-5 py-3 bg-white border justify-center items-center gap-2.5 flex
                ${selectedBeds.includes(bed) ? 'border-red-500' : 'border-stone-500'}
                ${bed === '1' ? 'rounded-l-[10px]' : ''}
                ${bed === '6+' ? 'rounded-r-[10px]' : ''}
                `}
                >
                  <button
                    onClick={() => handleBedClick(bed)}
                    className={`text-base font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide
                  ${selectedBeds.includes(bed) ? 'text-red-700' : 'text-stone-700'}`}
                  >
                    {bed}
                  </button>
                </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

