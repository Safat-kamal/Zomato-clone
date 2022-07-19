import React from 'react'
import './exploreCard.css';

const ExploreCard = ({restaurant}) => {
    const error = restaurant?.error;
    const name=restaurant?.info?.name;
    const coverImg = restaurant?.info?.image.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating =  restaurant?.info?.rating?.rating_text;
    const approxPrice = restaurant?.info?.cfo?.text;
    const offers = restaurant?.bulkOffers ?? [];
    const cuisine = restaurant.info?.cuisine?.map((item)=>item.name).slice(0,3);
    const bottomContainers= restaurant?.bottomContainers;
    const goldOff = restaurant?.gold?.text;
    const proOff = offers.length>1?offers[0].text:null;
    const discount = offers?.length > 1 ? offers[1].text : offers?.length === 1 ? offers[0].text : null
  return (
    <>
        {error?<div style={{color:"red"}}>{error}</div> :<div className='explore-card pointer'>
        <div className='explore-card-cover'>
            <img src={coverImg} alt={name} className='explore-card-image'/>
            <div className='delivery-time'>{deliveryTime}</div>
            {proOff&& <div className='pro-off'>{proOff}</div>}
            {goldOff&& <div className='gold-off absolute-center'>{goldOff}</div>}
            {discount && <div className='discount absolute-center'>{discount}</div>}
        </div>
        <div className='res-row'>
            <div className='food-name'>{name}</div>
            {rating && (<div className='rating absolute-center'>{rating} <i className="fi fi-rr-star"></i></div>)}
        </div>
        <div className='res-row'>
            {cuisine?.length && <div className='res-cuisine'>{cuisine.map((item,i)=>{
                return <span key={i} className='res-tag'>{item} {i !== cuisine?.length - 1 && ", "}</span>
            })}</div>}
            {approxPrice && <div className='cfo'>{approxPrice}</div>}
        </div>
        {bottomContainers?.length > 0 && (
            <div>
                <div className='card-seperator'></div>
                <div className='explore-bottom'>
                    <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text} style={{height:"18px"}}/>
                    <div className='res-bootom-text'>{bottomContainers[0]?.text}</div>
                </div>
            </div>
        )}
    </div>}
</>

  )
}

export default ExploreCard
