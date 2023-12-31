import React from 'react'
import './header.css'

import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'
const header = () => {
  return (
   <div className='head'>

      <div className='logocontainer'>
        <img src={punkLogo} className='punkLogo' alt=''/>
      </div>

      <div className='searchBar'>
        <div className='searchIconContainer'>
            <img src={searchIcon} alt='' />
        </div>
        <input className='searchInput' placeholder='Collection, item or user...'/>
      </div>

      <div className='headerItems'>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className='headerActions'>
        <div className='themeSwitchContainer'>
            <img src={themeSwitchIcon} alt=''/>
        </div>
      </div>

      <div className='loginButton'>GET IN</div>



   </div>

  
 ) 
}

export default header