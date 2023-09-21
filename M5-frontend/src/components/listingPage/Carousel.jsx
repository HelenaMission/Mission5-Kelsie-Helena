import { useState } from 'react';

const Carousel = ({ images, index }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  if (images.length === 0 || (!images[1] && !images[2])) {
    return (
      <div className='carousel relative w-96 bg-base-100 shadow-xl'>
        <div className={`carousel-item relative w-full`}>
          <img src={`data:image/jpeg;base64,${images[0]}`} alt={`Property 1`} className='w-full' />
          <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='carousel relative w-96 bg-base-100 shadow-xl'>
      {images.map((image, i) => (
        <div key={i} className={`carousel-item relative w-full ${i === currentIndex ? '' : 'hidden'}`}>
          <img src={`data:image/jpeg;base64,${image}`} alt={`Property ${currentIndex + 1}`} className='w-full' />
          {images.length >= 1 && (
            <div className='absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a onClick={nextSlide} className='btn btn-circle'>
                ❯
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
