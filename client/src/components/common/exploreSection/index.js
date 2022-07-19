import React from 'react'
import ExploreCard from './exploreCard';
import './exploresection.css';

const ExploreSection = ({list,collectionName}) => {
  return (
    <div className='max-width explore-section'>
      <div className='collections-title'>{collectionName}</div>
      <div className="explore-grid">
        {
          list.map((restaurant,index)=>{
            return <ExploreCard restaurant={restaurant} key={index}/>;
          })
        }
      </div>
    </div>
  )
}

export default ExploreSection;