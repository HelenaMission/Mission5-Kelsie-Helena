import { useState, useEffect } from 'react';

export default function Bed({ onBedSelect }) {
  const [initialBeds, setInitialBeds] = useState(['1', '2', '3', '4', '5', '6+']);
  const [selectedBeds, setSelectedBeds] = useState([]);

  const handleBedClick = (bed) => {
      setSelectedBeds(bed)
      }

    useEffect(() => {
      onBedSelect(selectedBeds);
    }, [selectedBeds, onBedSelect]);

    return (
      <div className='absolute left-[489px] top-[508px]'>
        <div className="text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
          Bedrooms
          <div className='flex space-x-1'>
            {initialBeds.map((bed) => (
              <div className='w-[37.34px] h-9 bg-white justify-start items-start inline-flex' key={bed}>
                <div
                  key={bed}
                  className={`w-[37.34px] h-9 px-5 py-3 bg-white border justify-center items-center gap-2.5 flex
                ${selectedBeds.includes(bed) ? 'border-red-500' : 'border-stone-500'}
                ${bed === '1' ? 'rounded-l-[10px]' : ''}
                ${bed === '6+' ? 'rounded-r-[10px]' : ''}
                `}
                >
                  <button
                    onClick={() => handleBedClick(bed)}
                    className={`text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide
                  ${selectedBeds.includes(bed) ? 'text-red-500' : 'text-stone-500'}`}
                  >
                    {bed}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

{/* <div className='w-[1280px] h-[1625px] relative bg-white'>
  <div className='w-[1280px] h-[293px] left-0 top-[1332px] absolute bg-gray-200'>
    <div className="w-[465px] left-[60px] top-[231px] absolute text-zinc-900 text-xs font-normal font-['Plus Jakarta Sans'] leading-[35px]">
      © 2022 Metro NZ Property Management | Disputes Process
      <br />
    </div>
    <div className='w-[152px] h-[204px] left-[1060px] top-[39px] absolute'>
      <div className='w-[152px] h-[188px] left-0 top-[16px] absolute'>
        <span style="text-zinc-900 text-xs font-normal font-['Plus Jakarta Sans'] leading-[18px]">
          Services & Support
          <br />
          <br />
          Tenant Application
          <br />
          <br />
          Listings
          <br />
        </span>
        <span style="text-zinc-900 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
          <br />
        </span>
      </div>
      <div className="w-[152px] h-8 left-0 top-0 absolute text-zinc-900 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px]">
        Tenants
      </div>
    </div>
    <div className='w-[189px] h-[204px] left-[882px] top-[39px] absolute'>
      <div className='w-[168px] h-[188px] left-0 top-[16px] absolute'>
        <span style="text-zinc-900 text-xs font-normal font-['Plus Jakarta Sans'] leading-[18px]">
          Our services
          <br />
          <br />
          Request an appraisal
          <br />
          <br />
          Property News
          <br />
        </span>
        <span style="text-zinc-900 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
          <br />
        </span>
      </div>
      <div className="w-[189px] h-8 left-0 top-0 absolute text-zinc-900 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px]">
        Property Owners
      </div>
    </div>
    <div className='w-[152px] h-[216px] left-[748px] top-[39px] absolute'>
      <div className='w-[152px] h-[188px] left-0 top-[28px] absolute'>
        <span style="text-zinc-900 text-xs font-normal font-['Plus Jakarta Sans'] leading-[18px]">
          Home
          <br />
          <br />
          About us
          <br />
          <br />
          Contact us
          <br />
        </span>
        <span style="text-zinc-900 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
          <br />
          <br />
        </span>
      </div>
      <div className="w-[152px] h-8 left-0 top-0 absolute text-zinc-900 text-base font-bold font-['Plus Jakarta Sans'] leading-[35px]">
        Menu
      </div>
    </div>
    <div className='w-[1320px] h-[0px] left-[1380px] top-[199px] absolute origin-top-left -rotate-180 border border-slate-600 border-opacity-20'></div>
    <div className='left-[60px] top-[-0.14px] absolute' />
    <div className="w-[292px] left-[60px] top-[36px] absolute text-zinc-900 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal">
      Metro NZ Property Management has offices conveniently located in Central Auckland but operates throughout New
      Zealand and also internationally.
      <br />
    </div>
    <div className='w-[33.60px] h-[33.60px] left-[65px] top-[149px] absolute'>
      <div className='w-[33.60px] h-[33.60px] left-0 top-0 absolute bg-gray-900 rounded-full shadow' />
    </div>
    <div className='w-[33.60px] h-[33.60px] left-[118.60px] top-[149px] absolute'>
      <div className='w-[33.60px] h-[33.60px] left-0 top-0 absolute bg-gray-900 rounded-full shadow' />
    </div>
    <div className='w-[33.60px] h-[33.60px] left-[172.20px] top-[149px] absolute'>
      <div className='w-[33.60px] h-[33.60px] left-0 top-0 absolute bg-gray-900 rounded-full shadow' />
    </div>
  </div>
  <div className='w-[1280px] h-[67px] left-0 top-0 absolute bg-white'>
    <img className='w-[191px] h-[43px] left-[30px] top-[12px] absolute' src='https://via.placeholder.com/191x43' />
    <div className="left-[1382.50px] top-[25.50px] absolute text-white text-sm font-medium font-['Plus Jakarta Sans'] leading-[21px]">
      Log In
    </div>
    <div className='w-[696.33px] h-6 left-[528px] top-[22px] absolute'>
      <div className="w-[46px] left-0 top-0 absolute text-zinc-900 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
        Home
      </div>
      <div className="w-44 left-[115px] top-0 absolute opacity-90 text-zinc-900 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
        Property Management
      </div>
      <div className="w-[166px] left-[312px] top-0 absolute opacity-90 text-center text-zinc-900 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
        Property owners
      </div>
      <div className="w-[113.96px] left-[518px] top-0 absolute opacity-90 text-zinc-900 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
        Tenants
      </div>
      <div className="w-[87.33px] left-[609px] top-0 absolute opacity-90 text-center text-zinc-900 text-base font-medium font-['Plus Jakarta Sans'] leading-normal">
        Listings
      </div>
    </div>
  </div>
  <div className='w-[1280px] h-[479px] left-[-1px] top-[280px] absolute bg-gray-200' />
  <div className="left-[354px] top-[140px] absolute text-center text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[30px]">
    Explore a diverse range of rental properties across scenic New Zealand,
    <br /> from modern apartments in bustling cities to charming countryside cottages.
  </div>
  <div className="left-[490px] top-[90px] absolute text-red-600 text-4xl font-bold font-['Plus Jakarta Sans'] leading-loose">
    Properties to rent
  </div>
  <div className='w-[58px] h-[58px] left-[64px] top-[137px] absolute'>
    <div className='w-[58px] h-[58px] left-0 top-0 absolute rounded-full border border-red-600' />
    <div className='w-11 h-11 left-[7px] top-[7px] absolute' />
  </div>
  <div className="left-[132px] top-[462px] absolute text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
    Weekly rent
  </div>
  <div className="left-[135px] top-[309px] absolute text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
    Location
  </div>
  <div className="left-[488px] top-[308px] absolute text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
    Property types
  </div>
  <div className="left-[488px] top-[462px] absolute text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
    Bedrooms
  </div>
  <div className="left-[491px] top-[562px] absolute text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
    Search only
  </div>
  <div className="left-[789px] top-[462px] absolute text-black text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
    Bathrooms
  </div>
  <div className='w-[307px] h-[26px] left-[133px] top-[505px] absolute'>
    <div className="left-0 top-[2px] absolute text-black text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
      $100
    </div>
    <div className="left-[258px] top-0 absolute text-black text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
      $1000+
    </div>
    <div className="left-[136px] top-0 absolute text-black text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
      $500
    </div>
  </div>
  <div className='w-[220px] px-5 py-3 left-[961px] top-[687px] absolute bg-red-600 rounded-[50px] shadow justify-center items-center gap-2.5 inline-flex'>
    <div className="text-white text-base font-bold font-['DM Sans'] leading-normal tracking-wide">SEARCH</div>
  </div>
  <div className='w-[220px] h-[60px] px-5 py-3 left-[81px] top-[220px] absolute bg-gray-200 rounded-tl-[20px] rounded-tr-[20px] justify-center items-center gap-2.5 inline-flex'>
    <div className="text-red-600 text-lg font-bold font-['Plus Jakarta Sans'] leading-normal tracking-wide">
      FILTERS
    </div>
  </div>
  <div className='w-[303px] h-[50px] left-[136px] top-[523px] absolute'>
    <div className='w-[303px] h-1.5 left-0 top-[22px] absolute justify-center items-center inline-flex'>
      <div className='w-[303px] h-1.5 bg-stone-300' />
    </div>
    <div className='w-[127px] h-10 left-[88px] top-[5px] absolute'>
      <div className='w-[102px] h-1.5 left-[13.50px] top-[17px] absolute bg-red-600' />
      <div className='w-10 h-10 left-[87px] top-0 absolute'>
        <div className='w-[25px] h-[25px] left-[7px] top-[7px] absolute bg-white rounded-full shadow' />
      </div>
      <div className='w-10 h-10 left-0 top-0 absolute'>
        <div className='w-[25px] h-[25px] left-[7px] top-[7px] absolute bg-white rounded-full shadow' />
      </div>
    </div>
  </div>
  <div className='w-[292px] h-9 px-2.5 py-3 left-[133px] top-[345px] absolute bg-white rounded-[5px] border border-stone-500 justify-start items-center gap-2.5 inline-flex'>
    <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
      Enter suburb or city...
    </div>
  </div>
  <div className='left-[486px] top-[344px] absolute justify-start items-start inline-flex'>
    <div className='w-[220px] h-9 px-5 py-3 bg-white rounded-[10px] border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        All
      </div>
    </div>
  </div>
  <div className='left-[486px] top-[600px] absolute justify-start items-start inline-flex'>
    <div className='w-[220px] h-9 px-5 py-3 bg-white rounded-[10px] border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        Immediate move-in
      </div>
    </div>
  </div>
  <div className='left-[726px] top-[344px] absolute justify-start items-start inline-flex'>
    <div className='w-[220px] h-9 px-5 py-3 bg-white rounded-[10px] border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        House
      </div>
    </div>
  </div>
  <div className='left-[723px] top-[600px] absolute justify-start items-start inline-flex'>
    <div className='w-[220px] h-9 px-5 py-3 bg-white rounded-[10px] border-2 border-red-600 justify-center items-center gap-2.5 flex'>
      <div className="text-red-600 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        Pets allowed
      </div>
    </div>
  </div>
  <div className='left-[961px] top-[344px] absolute justify-start items-start inline-flex'>
    <div className='w-[220px] h-9 px-5 py-3 bg-white rounded-[10px] border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        Apartment
      </div>
    </div>
  </div>
  <div className='left-[486px] top-[404px] absolute justify-start items-start inline-flex'>
    <div className='w-[220px] h-9 px-5 py-3 bg-white rounded-[10px] border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        Townhouse
      </div>
    </div>
  </div>
  <div className='left-[725px] top-[405px] absolute justify-start items-start inline-flex'>
    <div className='w-[220px] h-9 px-5 py-3 bg-white rounded-[10px] border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        Section
      </div>
    </div>
  </div>
  <div className='left-[961px] top-[404px] absolute justify-start items-start inline-flex'>
    <div className='w-[220px] h-9 px-5 py-3 bg-white rounded-[10px] border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        Unit
      </div>
    </div>
  </div>
  <div className='w-[259px] px-5 py-3 left-[687px] top-[687px] absolute rounded-[50px] border border-red-600 justify-center items-center gap-2.5 inline-flex'>
    <div className="text-red-600 text-base font-semibold font-['Plus Jakarta Sans'] uppercase leading-normal tracking-wide">
      Reset
    </div>
  </div>
  <div className='left-[825px] top-[497px] absolute bg-white justify-start items-start inline-flex'>
    <div className='w-[37.34px] h-9 px-5 py-3 bg-white border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        2
      </div>
    </div>
  </div>
  <div className='left-[523px] top-[497px] absolute bg-white justify-start items-start inline-flex'>
    <div className='w-[37.34px] h-9 px-5 py-3 bg-white border-2 border-red-600 justify-center items-center gap-2.5 flex'>
      <div className="text-red-600 text-xs font-bold font-['Plus Jakarta Sans'] leading-normal tracking-wide">2</div>
    </div>
  </div>
  <div className='left-[899px] top-[497px] absolute bg-white justify-start items-start inline-flex'>
    <div className='w-[37.34px] h-9 px-5 py-3 bg-white border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        4
      </div>
    </div>
  </div>
  <div className='left-[597px] top-[497px] absolute bg-white justify-start items-start inline-flex'>
    <div className='w-[37.34px] h-9 px-5 py-3 bg-white border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        4
      </div>
    </div>
  </div>
  <div className='left-[788px] top-[497px] absolute bg-white justify-start items-start inline-flex'>
    <div className='w-[37.34px] h-9 px-5 py-3 bg-white rounded-tl-[10px] rounded-bl-[10px] border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        1
      </div>
    </div>
  </div>
  <div className='left-[486px] top-[497px] absolute bg-white justify-start items-start inline-flex'>
    <div className='w-[37.34px] h-9 px-5 py-3 bg-white rounded-tl-[10px] rounded-bl-[10px] border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        1
      </div>
    </div>
  </div>
  <div className='left-[862px] top-[497px] absolute bg-white justify-start items-start inline-flex'>
    <div className='w-[37.34px] h-9 px-5 py-3 bg-white border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        3
      </div>
    </div>
  </div>
  <div className='left-[560px] top-[497px] absolute bg-white justify-start items-start inline-flex'>
    <div className='w-[37.34px] h-9 px-5 py-3 bg-white border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        3
      </div>
    </div>
  </div>
  <div className='left-[936px] top-[497px] absolute bg-white justify-start items-start inline-flex'>
    <div className='w-[37.34px] h-9 px-5 py-3 bg-white border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        5
      </div>
    </div>
  </div>
  <div className='left-[634px] top-[497px] absolute bg-white justify-start items-start inline-flex'>
    <div className='w-[37.34px] h-9 px-5 py-3 bg-white border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        5
      </div>
    </div>
  </div>
  <div className='left-[973px] top-[497px] absolute bg-white justify-start items-start inline-flex'>
    <div className='w-[37.34px] h-9 px-5 py-3 bg-white rounded-tr-[10px] rounded-br-[10px] border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        6+
      </div>
    </div>
  </div>
  <div className='left-[671px] top-[497px] absolute bg-white justify-start items-start inline-flex'>
    <div className='w-[37.34px] h-9 px-5 py-3 bg-white rounded-tr-[10px] rounded-br-[10px] border border-stone-500 justify-center items-center gap-2.5 flex'>
      <div className="text-stone-500 text-xs font-normal font-['Plus Jakarta Sans'] leading-normal tracking-wide">
        6+
      </div>
    </div>
  </div>
  <div className='w-[372px] h-[378px] left-[59px] top-[803px] absolute'>
    <div className='w-[372px] h-[130px] left-0 top-[248px] absolute bg-gray-200 rounded-bl-[10px] rounded-br-[10px]' />
    <div className='w-[122px] h-6 left-[10px] top-[330px] absolute justify-start items-center gap-[15px] inline-flex'>
      <div className='w-6 h-6 relative' />
      <div className="text-black text-sm font-bold font-['Plus Jakarta Sans']">2</div>
      <div className='w-6 h-6 relative'>
        <div className='w-6 h-6 left-0 top-0 absolute'></div>
      </div>
      <div className="text-black text-sm font-bold font-['Plus Jakarta Sans']">1.5</div>
    </div>
    <div className="w-[353px] h-6 left-[12px] top-[269px] absolute text-gray-900 text-lg font-bold font-['Plus Jakarta Sans'] leading-loose">
      35 Morihana Close, Glen Eden
    </div>
    <div className='w-[272px] h-[21px] left-[12px] top-[301px] absolute'>
      <span style="text-gray-900 text-xs font-bold font-['Plus Jakarta Sans'] leading-tight">$480/</span>
      <span style="text-gray-900 text-xs font-bold font-['Plus Jakarta Sans'] leading-tight">week</span>
    </div>
    <img
      className='w-[372px] h-[248px] left-0 top-0 absolute rounded-tl-[10px] rounded-tr-[10px]'
      src='https://via.placeholder.com/372x248'
    />
    <div className='w-10 h-10 left-[363px] top-[144px] absolute origin-top-left -rotate-180'>
      <div className='w-10 h-10 left-0 top-0 absolute bg-white bg-opacity-70 rounded-full' />
      <div className='w-[30.34px] h-[30.34px] left-[4.83px] top-[4.83px] absolute' />
    </div>
  </div>
</div>; */}