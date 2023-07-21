import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css'


const CollectionCard = ({id,naam ,value,image}) => {
  return (
    <div className='collectionCard'>
        <img src= {image} alt='' />
        <div className='details'>
        <div className='naam'>
            {naam} <div className='id'>.#{id}</div>
        </div>
        

        <div className='priceContainer'>
            <img src ={weth} className='wethImage' alt=''/>
            <div className='price'>{value}</div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard