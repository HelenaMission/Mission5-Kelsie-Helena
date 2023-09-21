import { useState, useEffect } from 'react';

export default function PropertyTypes({ onTypeSelect }) {
  const [typeButtons, setTypeButtons] = useState(['All', 'House', 'Apartment', 'Townhouse', 'Section', 'Unit']);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeClick = (button) => {
    if (selectedTypes.includes(button)) {
      setSelectedTypes(selectedTypes.filter((selected) => selected !== button));
    } else {
      setSelectedTypes([...selectedTypes, button]);
    }
  };

  useEffect(() => {
    onTypeSelect(selectedTypes);
  }, [selectedTypes, onTypeSelect]);

  return (
    <div className="absolute left-[719px] top-[65px] font-['Plus Jakarta Sans']">
      <div className='text-2xl font-bold leading-loose'>Property types</div>
      <div className='grid grid-cols-3 gap-5 mt-2'>
        {typeButtons.map((button) => (
            <button
              onClick={() => handleTypeClick(button)}
              key={button}
              className={`w-[290px] h-11 bg-white rounded-[10px] border justify-center items-center flex text-base font-normal leading-normal tracking-wide${
                selectedTypes.includes(button)
                  ? 'text-red-600 border-2 border-red-600'
                  : 'text-stone-500 border-stone-500'
              }`}
            >
              {button}
            </button>
        ))}
      </div>
    </div>
  );
}
