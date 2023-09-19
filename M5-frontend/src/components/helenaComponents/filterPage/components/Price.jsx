import { useState } from 'react';
import InputRange from 'react-input-range';
import '../styles/slider-input-range.css'

export default function Price({onPriceChange}) {
  const [priceRange, setPriceRange] = useState({ min: 100, max: 1000 });

  const handlePriceChange = (value) => {
    setPriceRange(value);
    onPriceChange(value);
  }


  return (
    <div className='absolute left-[199px] top-[308px]'>
      <div className="text-black text-2xl font-bold font-['Plus Jakarta Sans'] leading-loose">Weekly rent</div>
      <div className='w-[307px] h-[26px] top-[65px] absolute'>
        <label
          htmlFor='min-price'
          className='left-[10px] absolute text-black text-xs font-normal leading-normal tracking-wide'
        >
          Minimum
        </label>
        <label
          htmlFor='max-price'
          className='left-[355px] absolute text-black text-xs font-normal leading-normal tracking-wide'
        >
          Maximum
        </label>

        <div className='w-[340px] h-[6px] top-[65px] absolute flex items-center space-x-4 mt-2'>
          <InputRange
            formatLabel={(value) => `$${value}+`}
            step={100}
            maxValue={1000}
            minValue={100}
            value={priceRange}
            onChange={handlePriceChange}
            id='price-range'
          />
        </div>
      </div>
    </div>
  );
}
