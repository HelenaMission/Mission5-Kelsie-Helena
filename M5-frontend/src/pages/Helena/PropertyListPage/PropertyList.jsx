import PropertyFilter from '../FilterPage/PropertyFilter';
import NavBar from '../../../components/kelsieComponents/homePage/NavBar';
import { useState, useEffect } from 'react';
import bed from '../../../images/listingPage/bed.jpg';
import bath from '../../../images/listingPage/bath.jpg';

export default function PropertyList() {
  const [matchedProperties, setMatchedProperties] = useState([]);
  

  const filteredProperties = (data) => {
    console.log(data.property);
      setMatchedProperties(data.property);
  }

  useEffect(() => {
    console.log('matchedProperties has changed:', matchedProperties);
  }, [matchedProperties]);

  

  return (
    <div>
      <NavBar />
      <PropertyFilter filteredProperties={filteredProperties} />
      <div className='property-grid grid grid-cols-3 gap-9 left-[200px] top-[900px] absolute'>
        {matchedProperties.map((property, index) => (
          <div className='card w-96 bg-base-100 shadow-xl' key={property._id}>
            <div className='images-container'>
                <img src={`data:image/jpeg;base64,${property.img.img1}`} alt={`Property ${index +1}`} />
            </div>
            <div className='card-body'>
              <div className="w-[346px] h-6 text-gray-900 text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
                {property.address && (
                  <div>
                    {property.address.unit_number ? `${property.address.unit_number} / ` : ''}
                    {property.address.street_number} {property.address.street_name}, {property.address.suburb}
                  </div>
                )}
              </div>
              <div className='price-box w-[272px] h-[21px]'>
                <span className="text-gray-900 text-xs font-bold font-['Plus Jakarta Sans'] leading-tight">
                  ${property.price}
                </span>
                <span className="text-gray-900 text-xs font-bold font-['Plus Jakarta Sans'] leading-tight">/week</span>
              </div>
              <div className='beds-baths'>
                <img className='w-6 h-6 relative' src={bed} alt='bed logo' />
                <p>{property.bed}</p>
                <img className='w-6 h-6 relative' src={bath} alt='bath logo' />
                <p>{property.bath}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
