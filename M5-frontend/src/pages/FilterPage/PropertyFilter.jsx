import { useState } from 'react';
import PropertyTypes from '../../components/filterPage/PropertyTypes.jsx';
import Location from '../../components/filterPage/Location.jsx';
import Bed from '../../components/filterPage/Bed.jsx';
import Baths from '../../components/filterPage/Baths.jsx';
import Others from '../../components/filterPage/Others.jsx';
import Price from '../../components/filterPage/Price.jsx';

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
    <div className='filter-components relative bg-slate-200 top-[60px] h-[630px]'>
      <PropertyTypes onTypeSelect={handleTypeSelect} />
      <Location onLocationChange={handleLocationChange} />
      <Bed onBedSelect={handleBedSelect} />
      <Baths onBathSelect={handleBathSelect} onReset={handleResetLocal} />
      <Others onImmediate={handleImmediate} onPets={handlePets} />
      <Price onPriceChange={handlePriceChange} />
      <div className="buttons absolute left-[1070px] top-[560px] font-['Plus Jakarta Sans']">
        <button
          type='button'
          onClick={handleResetLocal}
          className='w-[259px] h-12 mr-5 rounded-[50px] border border-red-600 justify-center items-center inline-flex text-red-600 text-base font-semibold  uppercase leading-normal tracking-wide'
        >
          RESET
        </button>
        <button
          type='button'
          onClick={handleSubmitLocal}
          className='w-[220px] h-12 bg-red-600 rounded-[50px] shadow justify-center items-center gap-2.5 inline-flex text-white text-base font-bold leading-normal tracking-wide'
        >
          SEARCH
        </button>
      </div>
    </div>
  );
}
