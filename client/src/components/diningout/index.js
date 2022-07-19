import React, { useEffect, useState } from 'react'
import axios from '../../externals/axios/axios';
import ExploreSection from '../common/exploreSection'
import Filters from '../common/filters'
import DiningOutCollections from './diningCollections'

const DiningOut = () => {
  const [DiningData,setDiningData] = useState([]);
  useEffect(()=>{
    axios.get('/diningOutData').then((response)=>{
      setDiningData(response.data);
    }).catch((error)=>{
      setDiningData([{"error":error.response.data}]);
    })
  }, []);

  const diningFilter = [
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
  const diningList =  DiningData;
  return (
    <div>
      <DiningOutCollections/>
      <div className='max-width'>
        <Filters FilterList={diningFilter}/>
        <ExploreSection list={diningList} collectionName="Dine-Out Restaurants in Delhi/NCR"/>

      </div>
    </div>
  )
}

export default DiningOut
