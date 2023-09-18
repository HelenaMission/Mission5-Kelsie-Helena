import {useState} from 'react';
import PropertyTypes from '../../../components/helenaComponents/filterPage/components/PropertyTypes.jsx';
import Location from '../../../components/helenaComponents/filterPage/components/Location.jsx';
import Bed from '../../../components/helenaComponents/filterPage/components/Bed.jsx';
import Baths from '../../../components/helenaComponents/filterPage/components/Baths.jsx';
import Others from '../../../components/helenaComponents/filterPage/components/Others.jsx';
import Price from '../../../components/helenaComponents/filterPage/components/Price.jsx';
import axios from 'axios';

export default function PropertyFilter({ filteredProperties }) {
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

  const handleReset = () => {
    setTypes([]);
    setBed([]);
    setBath([]);
    setImmediate(false);
    setPet(false);
    setSuburb('');
    setPriceRange({ min: 100, max: 1000 });
  };

  const handleSubmit = async () => {
    const filter = {
      types,
      bed,
      bath,
      immediate,
      pet,
      suburb,
      priceRange,
    };
    console.log(filter);

    try {
      const response = await axios.post('http://localhost:4000/api/filter', filter, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Matched data:', response.data);
        filteredProperties(response.data);
      } else {
        console.log('Error fetching data:', response.data);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div>
      <PropertyTypes onTypeSelect={handleTypeSelect} />
      <div>Selected Property Types: {types}</div>

      <Location onLocationChange={handleLocationChange} />
      <div>Selected Suburb: {suburb}</div>

      <Bed onBedSelect={handleBedSelect} />
      <div>Selected Bed Types: {bed}</div>

      <Baths onBathSelect={handleBathSelect} />
      <div>Selected Bath Types: {bath}</div>

      <Others onImmediate={handleImmediate} onPets={handlePets} />
      <div>Selected Immediate: {immediate.toString()}</div>
      <div>Selected Pets: {pet.toString()}</div>

      <Price onPriceChange={handlePriceChange} />
      <div>
        Selected Price Range: ${priceRange.min} - ${priceRange.max}
      </div>

      <div className='absolute left-[709px] top-[758px]'>
        <div className='w-[259px] h-12 px-5 py-3 rounded-[50px] border border-red-600 justify-center items-center gap-2.5 inline-flex'>
          <button
            type='button'
            onClick={handleReset}
            className="text-red-600 text-base font-semibold font-['Plus Jakarta Sans'] uppercase leading-normal tracking-wide"
          >
            RESET
          </button>
        </div>

        <div
          type='button'
          onClick={handleSubmit}
          className='w-[220px] h-12 px-5 py-3 bg-red-600 rounded-[50px] shadow justify-center items-center gap-2.5 inline-flex'
        >
          <button className="text-white text-base font-bold font-['DM Sans'] leading-normal tracking-wide">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
















