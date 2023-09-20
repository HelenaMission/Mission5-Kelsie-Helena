import React from 'react';

export default function Others({ onImmediate, onPets }) {
  const [isImmediate, setIsImmediate] = React.useState(false);
  const [isPets, setIsPets] = React.useState(false);

  const handleImmediate = () => {
    setIsImmediate(!isImmediate);
    onImmediate(!isImmediate);
  };

  const handlePets = () => {
    setIsPets(!isPets);
    onPets(!isPets);
  };

  return (
    <div>
      <div className="left-[719px] top-[310px] relative text-2xl font-bold font-['Plus Jakarta Sans'] leading-loose">
        Search only
        <div className='buttons flex mt-2'>
          <button
            onClick={handleImmediate}
            className={`${
              isImmediate ? 'text-red-600 border-2 border-red-600' : 'text-stone-500 border-stone-500'
            } w-[290px] h-11 mr-6 bg-white rounded-[10px] border justify-center items-center text-base font-normal leading-normal tracking-wide`}
          >
            Immediate move-in
          </button>
          <button
            onClick={handlePets}
            className={`${
              isPets ? 'text-red-600 border-2 border-red-600' : 'text-stone-500 border-stone-500'
            } w-[290px] h-11 bg-white rounded-[10px] border justify-center items-center text-base font-normal leading-normal tracking-wide`}
          >
            Pets allowed
          </button>
        </div>
      </div>
    </div>
  );
}
