import React from 'react';
import './nightOutItem.css';

const NightOutItem = ({item}) => {
  return (
    <div className='night-item'>
        <div className='night-item-cover'>
            <img src={item.cover} alt={item.name} className="night-item-image"/>
            <div className='bg-gradient'></div>
            <div className="night-item-name">{item.name}</div>
            <div className="night-item-places">
                <span className='place-count'>{item.placeCount}</span>
                <span className='place-arrow'>{item.place}</span>
            </div>
        </div>
    </div>
  )
}

export default NightOutItem
