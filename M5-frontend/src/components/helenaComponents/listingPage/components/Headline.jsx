import React from 'react'

export default function Headline() {
  return (
    <div className='text-center py-7'>
      <div className="text-red-600 text-5xl font-bold font-['Plus Jakarta Sans'] leading-[100px] tracking-wide">
        Properties to rent
      </div>
      <div className="text-black text-2xl font-normal font-['Plus Jakarta Sans'] tracking-normal leading-relaxed">
        Explore a diverse range of rental properties across scenic New Zealand,
        <br />
        from modern apartments in bustling cities to charming countryside cottages.
      </div>
    </div>
  );
}
