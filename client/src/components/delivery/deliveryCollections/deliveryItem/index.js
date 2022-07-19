import React from 'react'
import './deliveryitems.css';

const DeliveryItem = (props) => {
    const {item} = props;
  return (
    <div className='delivery-item'>
        <div className='delivery-item-cover'>
            <img src={item.cover} alt={item.name} className="delivery-item-image"/>
        </div>
        <div className="delivery-item-name">
            {item.name}
        </div>
      
    </div>
  )
}

export default DeliveryItem
