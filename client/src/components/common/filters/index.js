import React from 'react'
import FilterItem from './filterItem';
import './filters.css';
const Filters = (props) => {
  const {FilterList} =  props;
  return (
    <div className='filters'>
      {
        FilterList.map((filter)=>{
          return <FilterItem filteritem={filter} key={filter.id}/>
        })
      }
    </div>
  )
}

export default Filters
