import { useState, useEffect } from 'react';

export default function PropertyTypes({ onTypeSelect }) {
  const [buttons, setButtons] = useState(['All', 'House', 'Apartment', 'Townhouse', 'Section', 'Unit']);
  const [selectedTypes, setSelectedTypes] = useState([]);


  const handleTypeClick = (button) => {
      if (selectedTypes.includes(button)) {
        setSelectedTypes(selectedTypes.filter((selected) => selected !== button));
      } else {
        setSelectedTypes([...selectedTypes, button]);
      }
    }
  

  useEffect(() => {
      onTypeSelect(selectedTypes);
  }, [selectedTypes, onTypeSelect]);

  return (
    <div>
      <div className='absolute left-[489px] top-[308px]'>
        <div className=" text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
          Property types
        </div>
        <div className='mt-3'>
          <div className='grid grid-cols-3 gap-4'>
            {buttons.map((button) => (
              <div
                key={button}
                className={`w-[220px] h-9 px-5 py-3 bg-white rounded-[10px] border justify-center items-center gap-2.5 flex ${
                  selectedTypes.includes(button) ? 'border-red-500' : 'border-stone-500'
                }`}
              >
                <button
                  onClick={() => handleTypeClick(button)}
                  className={`text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide ${
                    selectedTypes.includes(button) ? ' text-red-500' : 'text-stone-500'
                  }`}
                >
                  {button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
