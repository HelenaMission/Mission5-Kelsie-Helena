import { useState } from 'react';
import InputRange from 'react-input-range';
import '../../components/filterPage/slider-input-range.css';

export default function Price({ onPriceChange }) {
  const [priceRange, setPriceRange] = useState({ min: 100, max: 1000 });

  const handlePriceChange = (value) => {
    setPriceRange(value);
    onPriceChange(value);
  };

  return (
    <div className='relative left-[199px] top-[68px]'>
      <div className="text-2xl font-bold font-['Plus Jakarta Sans'] leading-loose">
        Weekly rent
      </div>
      <div className='w-[340px] h-[6px] top-[45px] relative flex items-center space-x-4 mt-2'>
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
  );
}
