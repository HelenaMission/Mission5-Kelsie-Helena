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
  };

  useEffect(() => {
    onBedSelect(selectedBeds);
  }, [selectedBeds, onBedSelect]);

  return (
    <div className='absolute left-[719px] top-[268px]'>
      <div className="text-2xl font-bold font-['Plus Jakarta Sans'] leading-loose">
        Bedrooms
        <div className='flex mt-2'>
          {initialBeds.map((bed) => (
            <button
              onClick={() => handleBedClick(bed)}
              key={bed}
              className={`w-12 h-12 bg-white border justify-center items-center gap-2.5 flex text-base font-normal
                ${
                  selectedBeds.includes(bed)
                    ? 'border-2 border-red-600 text-red-600'
                    : 'border-stone-500 text-stone-600'
                }
                ${bed === '1' ? 'rounded-l-[10px]' : ''}
                ${bed === '6+' ? 'rounded-r-[10px]' : ''}
                `}
            >
              {bed}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
