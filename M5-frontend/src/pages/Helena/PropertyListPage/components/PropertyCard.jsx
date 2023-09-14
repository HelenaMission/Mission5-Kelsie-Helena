import React from 'react'

export default function PropertyCard() {
  return (
    <div>
      <div className='card w-96 bg-base-300 shadow-xl'>
        <figure>
          <img src='./images/14_omana_rd_milford_2bd_1bt_$560.jpg' alt='House' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>14 Omana Road, Milford</h2>
          <p>$560/week</p>
          <div className='card-actions justify-start'>
            2 bed 1 bath
          </div>
        </div>
      </div>
    </div>
  );
}
