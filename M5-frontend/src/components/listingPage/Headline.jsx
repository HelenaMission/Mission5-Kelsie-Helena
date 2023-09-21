import circle from '../../images/listingPage/circle.jpg'
import arrow from '../../images/listingPage/arrow.jpg'
import { Link } from 'react-router-dom';

export default function Headline() {
  return (
    <div>
      <Link to='/' class='absolute left-[70px] top-[120px] flex'>
        <img src={circle} alt='circle logo' className='w-[65px] h-[65px]' />
        <img src={arrow} alt='arrow logo' className='absolute left-[11px] top-[10px]' />
      </Link>

      <div className='text-center pt-12'>
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
