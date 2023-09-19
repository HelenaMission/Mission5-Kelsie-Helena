import React from 'react';

export default function Others({onImmediate, onPets}) {
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
      <div className="left-[491px] top-[622px] absolute text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
        Search only
        <div className='left-[1px] top-[50px] absolute justify-start items-start inline-flex'>
          <div
            className={`w-[220px] h-9 px-5 py-3 bg-white rounded-[10px] border justify-center items-center gap-2.5 flex ${
              isImmediate ? 'border-red-500' : 'border-stone-500'
            }`}
          >
            <button
              onClick={handleImmediate}
              className={`${
                isImmediate ? 'text-red-500' : 'text-stone-500'
              } text-xs font-normal leading-normal tracking-wide`}
            >
              Immediate move-in
            </button>
          </div>
        </div>
        <div className='left-[255px] top-[50px] absolute justify-start items-start inline-flex'>
          <div
            className={`w-[220px] h-9 px-5 py-3 bg-white rounded-[10px] border justify-center items-center gap-2.5 flex ${
              isPets ? 'border-red-500' : 'border-stone-500'
            }`}
          >
            <button
              onClick={handlePets}
              className={`${
                isPets ? 'text-red-500' : 'text-stone-500'
              } text-xs font-normal leading-normal tracking-wide`}
            >
              Pets allowed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
