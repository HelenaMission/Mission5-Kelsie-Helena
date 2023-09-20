import { useState, useEffect } from 'react';
import PropertyTypes from '../../../components/helenaComponents/filterPage/components/PropertyTypes.jsx';
import Location from '../../../components/helenaComponents/filterPage/components/Location.jsx';
import Bed from '../../../components/helenaComponents/filterPage/components/Bed.jsx';
import Baths from '../../../components/helenaComponents/filterPage/components/Baths.jsx';
import Others from '../../../components/helenaComponents/filterPage/components/Others.jsx';
import Price from '../../../components/helenaComponents/filterPage/components/Price.jsx';

export default function PropertyFilter({ onReset, handleSubmit }) {
  const [types, setTypes] = useState([]);
  const [bed, setBed] = useState([]);
  const [bath, setBath] = useState([]);
  const [immediate, setImmediate] = useState(false);
  const [pet, setPet] = useState(false);
  const [suburb, setSuburb] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 100, max: 1000 });

  const handleTypeSelect = (selectedTypes) => {
    if (selectedTypes.includes('All')) {
      selectedTypes = ['House', 'Apartment', 'Townhouse', 'Section', 'Unit'];
    }
    setTypes(selectedTypes);
  };

  const handleBedSelect = (selectedBeds) => {
    const updatedBeds = selectedBeds.map((bed) => bed.replace('+', ''));
    setBed(updatedBeds);
  };

  const handleBathSelect = (selectedBaths) => {
    const updatedBaths = selectedBaths.map((bath) => bath.replace('+', ''));
    setBath(updatedBaths);
  };

  const handleImmediate = (value) => {
    setImmediate(value);
  };

  const handlePets = (value) => {
    setPet(value);
  };

  const handleLocationChange = (value) => {
    setSuburb(value);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleResetLocal = () => {
    setTypes([]);
    setBed([]);
    setBath([]);
    setImmediate(false);
    setPet(false);
    setSuburb('');
    setPriceRange({ min: 100, max: 1000 });

    onReset();
  };

  const handleSubmitLocal = async () => {
    const filter = {
      types,
      bed,
      bath,
      immediate,
      pet,
      suburb,
      priceRange,
    };

    handleSubmit(filter);
  };

  return (
    <div className='filter-components relative bg-slate-200 top-[70px] h-[700px]'>
        <PropertyTypes onTypeSelect={handleTypeSelect} />
        <Location onLocationChange={handleLocationChange} />
        <Bed onBedSelect={handleBedSelect} />
        <Baths onBathSelect={handleBathSelect} onReset={handleResetLocal} />
        <Others onImmediate={handleImmediate} onPets={handlePets} />
        <Price onPriceChange={handlePriceChange} />
        <div className='relative left-[1079px] top-[499px]'>
          <div className='w-[259px] h-12 px-5 py-3 rounded-[50px] border border-red-600 justify-center items-center gap-2.5 inline-flex'>
            <button
              type='button'
              onClick={handleResetLocal}
              className="text-red-600 text-base font-semibold font-['Plus Jakarta Sans'] uppercase leading-normal tracking-wide"
            >
              RESET
            </button>
          </div>

          <div
            type='button'
            onClick={handleSubmitLocal}
            className='relative left-[20px] w-[220px] h-12 px-5 py-3 bg-red-600 rounded-[50px] shadow justify-center items-center gap-2.5 inline-flex'
          >
            <button className="text-white text-base font-bold font-['DM Sans'] leading-normal tracking-wide">
              SEARCH
            </button>
          </div>
        </div>
      </div>
  );
}
