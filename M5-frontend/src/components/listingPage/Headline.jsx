import circle from '../../images/listingPage/circle.jpg'
import arrow from '../../images/listingPage/arrow.jpg'
import { Link } from 'react-router-dom';

export default function Headline() {
  return (
    <div>
      <Link to='/' class='relative left-[70px] top-[70px]'>
        <img src={circle} alt='circle logo' className='w-[65px] h-[65px]' />
        <img src={arrow} alt='arrow logo' className='absolute bottom-2.5 left-2.5' />
      </Link>

      <button className='redirect-btn absolute'></button>
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
    </div>
  );
}
