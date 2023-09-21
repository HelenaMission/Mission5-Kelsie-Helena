import PropertyFilter from '../FilterPage/PropertyFilter';
import { useState, useEffect } from 'react';
import Footer from '../../components/kelsieComponents/homePage/Footer.jsx';
import NavBar from '../../components/kelsieComponents/homePage/NavBar.jsx';
import PropertyCard from '../../components/listingPage/PropertyCard.jsx';
import Headline from '../../components/listingPage/Headline';
import axios from 'axios';

export default function PropertyList() {
  const [matchedProperties, setMatchedProperties] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [initialProperties, setInitialProperties] = useState([]);
  const [resetKey, setResetKey] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const filteredProperties = (data) => {
    console.log(data.property);
    setMatchedProperties(data.property);
  };

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const unfilteredProperties = (data) => {
    console.log(data.property);
    setInitialProperties(data.property);
  };

  const handleSubmit = async (filter) => {
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

  const handleReset = () => {
    setResetKey((prevKey) => prevKey + 1);
    setMatchedProperties([]);
  };

  const handleButtonClicked = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  useEffect(() => {
    console.log('matchedProperties has changed:', matchedProperties);
  }, [matchedProperties]);

  useEffect(() => {
    async function loadAllProperties() {
      try {
        const response = await axios.get('http://localhost:4000/api/properties');
        if (response.status === 200) {
          console.log('All data:', response.data);
          unfilteredProperties(response.data);
        } else {
          console.log('Error fetching data:', response.data);
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }

    loadAllProperties();
  }, []);

  return (
    <div>
      <NavBar />
      <div className='h-auto pb-36'>
        <Headline />
        <button
          onClick={() => {
            toggleFilter();
            handleButtonClicked();
          }}
          className={`w-[220px] h-[60px] ${
            isButtonClicked ? 'bg-slate-200 text-rose-600 ease-linear' : 'bg-red-600 text-white'
          } ease-in-out duration-300 rounded-tl-[20px] rounded-tr-[20px] justify-center items-center absolute left-[150px] m-3 text-base font-bold text-xl font-['Plus Jakarta Sans'] leading-normal tracking-wide`}
        >
          FILTERS
        </button>
        <div
          className={`line relative top-[69px] w-auto h-[3px] ${isButtonClicked ? 'bg-slate-200' : 'bg-red-600'}`}
        ></div>
        <div
          className={`filter-section transition-height duration-300 ${
            isFilterVisible ? 'h-auto' : 'h-0 overflow-hidden'
          }`}
        >
          {isFilterVisible && (
            <PropertyFilter
              key={resetKey}
              filteredProperties={filteredProperties}
              handleSubmit={handleSubmit}
              onReset={handleReset}
            />
          )}
        </div>
        <div className={`relative top-[85px] pt-12 flex justify-center ${isFilterVisible ? 'h-auto' : ''}`}>
          {matchedProperties.length === 0 && initialProperties.length === 0 ? (
            <div className='no-result text-center'>
              <p className='text-rose-600 font-bold text-5xl'> Oops! No properties found</p>
              <p className='text-3xl mt-8'>Please search again</p>
            </div>
          ) : (
            <PropertyCard matchedProperties={matchedProperties} initialProperties={initialProperties} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
