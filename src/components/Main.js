import React, { useEffect, useState } from 'react'
import TwitterLogo from '../assets/owner/twitter.png'
import instagramLogo from '../assets/owner/instagram.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
const Main = ({selectedPunk,punkListData}) => {
    const [activePunk,setActivePunk] = useState(punkListData[0])
    useEffect(() =>{setActivePunk(punkListData[selectedPunk])},[punkListData,selectedPunk])
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image} alt="" />
          </div>
        </div>


        <div className="punkDetails" style={{ color: "#fff" }}>
           <div className="title">{activePunk.naam}</div>
          <span className="itemNumber">.#{activePunk.id}</span>
        </div>
        <div className='owner'>
            <div className='ownerImageContainer'>
                <img src='https://bafybeicorqtrzlcbwfvp445vg6t56gnv7kgevljaren5orxq5dsq5uw7tq.gateway.ipfscdn.io/2.jpg'/>
            </div>
            <div className='ownerDetails'>
                <div className='ownerNameAndHandel' >
                    <div className='ownerAccount'>0x31FD6BA3405B9E6aCd7005f653097Ee2520D1C92</div>
                    <div className='ownerHandel'>Vipul Goyal</div>
                    <div className='ownerLink'>
                        <img src={TwitterLogo} alt=''/>
                    </div>
                    <div className='ownerLink'>
                        <img src={instagramLogo} alt=''/>
                    </div>
                    <div className='ownerLink'>
                        <img src={moreIcon} alt=''/>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main
