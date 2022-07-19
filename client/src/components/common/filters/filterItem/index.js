import React from 'react'
import './filterItem.css';

const FilterItem = ({filteritem}) => {
  return (
    <div className='filteritem'>    
        {filteritem.icon && filteritem.icon}
        <div className='filteritem-name'>
            {filteritem.title}
        </div>      
    </div>
  )
}

export default FilterItem
