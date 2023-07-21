import React from 'react'
import CollectionCard from './CollectionCard'
import './Punklist.css'


const Punklist = ({punkListData}) => {
  return (
    <div className='punkList'>
      {punkListData.map(punk =>(
        <div>
          <CollectionCard 
          key={punk.id}
          id={punk.id}
          naam={punk.naam}
          value={punk.value}
          image={punk.image}
           />
        </div>
      ))}
        
    </div>
  )
}

export default Punklist