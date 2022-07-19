import React, { useEffect, useState } from 'react';
import axios from '../../externals/axios/axios';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topBrands';

const Delivery = () => {
  const [DeliveryData,setDeliveryData] = useState([]);
  useEffect(()=>{
    axios.get('/deliveryData').then((response)=>{
      setDeliveryData(response.data);
    }).catch((error)=>{
      setDeliveryData([{"error":error.response.data}]);
    })
  }, []);

  const restaurantList = DeliveryData;
  const delivryFilter = [
    {
      id:1,
      title: 'Filters',
      icon: <i className="fi fi-rr-settings-sliders"></i>
    },
    {
      id:2,
      title:'Rating: 4.0+',
    },
    {
      id:3,
      title:'Pro Offers'
    },
    {
      id:4,
      title:"Outdoor Seating"
    },
    {
      id:5,
      title:"Serves Alcohol"
    },
    {
      id:6,
      title:"Open Now"
    }
  ]

  
  return (
    <div>
      <div className='max-width'>
        <Filters FilterList={delivryFilter}/>
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection list={restaurantList} collectionName="Delivery Restaurants in Delhi/NCR"/>
    </div>
  )
}

export default Delivery