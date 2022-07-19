import React from 'react';
import './diningOutItem.css';

const DiningOutItem = ({item}) => {
  return (
    <div className='dining-item'>
        <div className='dining-item-cover'>
            <img src={item.cover} alt={item.name} className="dining-item-image"/>
            <div className='bg-gradient'></div>
            <div className="dining-item-name">{item.name}</div>
            <div className="dining-item-places">
                <span className='place-count'>{item.placeCount}</span>
                <span className='place-arrow'>{item.place}</span>
            </div>
        </div>
    </div>
  )
}

export default DiningOutItem
