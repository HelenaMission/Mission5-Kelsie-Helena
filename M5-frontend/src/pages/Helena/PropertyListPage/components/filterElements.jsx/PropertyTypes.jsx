import { useState, useEffect } from 'react';

export default function PropertyTypes({ onPropertyTypeSelect }) {
  const [buttons, setButtons] = useState(['All', 'House', 'Apartment', 'Townhouse', 'Section', 'Unit']);
  const [selectedTypes, setSelectedTypes] = useState([]);

  // const handleTypeClick = (typeButton) => {
  //   if (typeButton === 'All') {
  //     if (selectedTypes.length === typeButtons.length - 1) {
  //       setSelectedTypes([]);
  //     } else {
  //       const propertyTypesToSelect = typeButtons.filter((type) => type !== 'All');
  //       setSelectedTypes(propertyTypesToSelect);
  //     }
  //   } else {
  //     if (selectedTypes.includes(typeButton)) {
  //       setSelectedTypes(selectedTypes.filter((selected) => selected !== typeButton));
  //     } else {
  //       setSelectedTypes([...selectedTypes, typeButton]);
  //     }
  //   }
  // };

  const handleTypeClick = (button) => {
    if (button === 'All') {
      if (selectedTypes.length === buttons.length - 1) {
        setSelectedTypes([]);
      } else {
        const propertyTypesToSelect = buttons.filter((type) => type !== 'All');
        setSelectedTypes(propertyTypesToSelect);
      }
    } else {
      if (selectedTypes.includes(button)) {
        setSelectedTypes(selectedTypes.filter((selected) => selected !== button));
      } else {
        setSelectedTypes([...selectedTypes, button]);
      }
    }
  };




  useEffect(() => {
    console.log(selectedTypes);
    onPropertyTypeSelect(selectedTypes);
  }, [selectedTypes, onPropertyTypeSelect]);

  return (
    <div>
      <div className='absolute left-[489px] top-[308px]'>
        <div className=" text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">Property types</div>
        <div className='mt-8'>
          <div className='grid grid-cols-3 gap-4'>
            {buttons.map((button) => (
              <div
                key={button}
                className={`w-[220px] h-9 px-5 py-3 bg-white rounded-[10px] border border-stone-500 justify-center items-center gap-2.5 flex ${
                  selectedTypes.includes(button) ? 'border-red-500 text-red-500' : 'border-stone-500 text-stone-500'
                }`}
              >
                <button
                  onClick={() => handleTypeClick(button)}
                  className={`text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide ${
                    selectedTypes.includes(button) ? 'text-red-500' : 'text-stone-500'
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
