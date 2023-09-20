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
      <div className="left-[719px] top-[450px] relative text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-loose">
        Search only
        <div className='buttons flex'>
          <button
            onClick={handleImmediate}
            className={`${
              isImmediate ? 'text-red-500 border-red-500' : 'text-stone-500 border-stone-500'
            } w-[290px] h-11 px-5 py-3 bg-white rounded-[10px] border justify-center items-center gap-2.5 flex text-base font-normal leading-normal tracking-wide`}
          >
            Immediate move-in
          </button>
          <div className='justify-start items-start inline-flex'>
            <button
              onClick={handlePets}
              className={`${
                isPets ? 'text-red-500 border-red-500' : 'text-stone-500 border-stone-500'
              } w-[290px] h-11 px-5 py-3 bg-white rounded-[10px] border justify-center items-center gap-2.5 flex text-base font-normal leading-normal tracking-wide`}
            >
              Pets allowed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
