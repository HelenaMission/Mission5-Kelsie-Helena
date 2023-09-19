import React from 'react'
import bed from '../../../../images/listingPage/bed.jpg';
import bath from '../../../../images/listingPage/bath.jpg';
import Carousel from '../../../helenaComponents/listingPage/components/Carousel';

export default function PropertyCard({ matchedProperties, initialProperties }) {
  const propertiesToDisplay = matchedProperties.length > 0 ? matchedProperties : initialProperties;


  return (
    <div className='property-grid grid grid-cols-3 gap-9 left-[200px] top-[900px] absolute'>
      {propertiesToDisplay.map((property, index) => (
        <div className='carousel relative card w-96 bg-base-100 shadow-xl' key={property._id}>
          <Carousel
            images={[property.img.img1, property.img.img2, property.img.img3]}
            index={property.img.img2 && property.img.img3 ? 0 : -1}
          />
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
  );
}
