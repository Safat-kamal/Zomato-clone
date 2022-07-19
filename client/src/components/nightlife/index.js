import React, { useEffect, useState } from 'react';
import axios from '../../externals/axios/axios';
import ExploreSection from '../common/exploreSection'
import Filters from '../common/filters'
import NightLifeCollections from './nightlifeCollection'

const NightLife = () => {
  const [NightLifeData,setNightLifeData] = useState([]);
  useEffect(()=>{
    axios.get('/nightLifeData').then((response)=>{
      setNightLifeData(response.data);
    }).catch((error)=>{
      setNightLifeData([{"error":error.response.data}]);
    })
  }, []);
  const nightlifeFilter = [
    {
      id:1,
      title: 'Filters',
      icon: <i className="fi fi-rr-settings-sliders absolute-cente"></i>
    },
    {
      id:2,
      title:'Pro Offers',
    },
    {
      id:3,
      title:'Distance',
      icon: <i className="fi fi-rr-exchange absolute-center"></i>
    },
    {
      id:4,
      title:"Rating: 4.0+"
    },
    {
      id:5,
      title:"Pubs And Bars"
    }
  ]
  const nightLifeList = NightLifeData;
  return (
    <div>
      <NightLifeCollections/>
      <div className='max-width'>
        <Filters FilterList={nightlifeFilter}/>
        <ExploreSection list={nightLifeList} collectionName="Nightlife Restaurants in Delhi/NCR"/>
      </div>
    </div>
  )
}

export default NightLife
