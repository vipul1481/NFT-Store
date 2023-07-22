
import './App.css';
import Header from './components/header';
import CollectionCard from './components/CollectionCard';
import { useState , useEffect } from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';
function App() {
    //  const[punkListData, setPunkListData]= useState([])
    //  async function fetchDataFromAPI() {
    //   const apiURL = 'https://testnets-api.opensea.io/assets?asset_contract_address=0xA03469E585Ddabde7D7Ba723C3d92cd59318908e'; // Replace this with the actual API URL
    
    //   try {
    //     const response = await fetch(apiURL);
    
    //     // Check if the request was successful (status code 200-299)
    //     if (!response.ok) {
    //       throw new Error(`Request failed with status ${response.status}`);
    //     }
    
    //     const data = await response.json();
    //     return data; // Return the API response data
    //   } catch (error) {
    //     // Handle errors if the API call fails
    //     console.error('Error fetching data from API:', error.message);
    //     throw error; // Rethrow the error to let the caller handle it
    //   }
    // }
    
    // // Call the async function and handle the response
    // fetchDataFromAPI()
    //   .then((data) => {
    //     console.log('API Response:', data);
    //     // You can do something with the data here
    //   })
    //   .catch((error) => {
    //     // Handle any errors that occurred during the API call
    //     console.error('Error occurred:', error);
    //   });
      // 
      const punkListData =[{id: 0, naam:'King Punk', value: 7, image:'https://i.seadn.io/gae/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM?auto=format&dpr=1&w=384' },
      {id: 1, naam:'Panda', value: 19, image:'https://i.seadn.io/gae/wZo2qSsG8FOu_pFmHiZu1NJxPw7x1lWdiXeaoSN2aQF6Fx0oq2qH_KjXtxkf9yXrgcHBVUZvvXiPwWGWo4XH0RCXZEim_O77fBquXw?auto=format&dpr=1&w=1000' },
      {id: 2, naam:'3Landers', value: 11, image:'https://i.seadn.io/gcs/files/18ff688618243cf9d9e30db6d81cdbd2.png?auto=format&dpr=1&w=384' },
      {id: 3, naam:'Dogo', value: 13, image:'https://i.seadn.io/gcs/files/66ed7ca03d1656a0f9eaf680625e22c9.jpg?auto=format&dpr=1&w=384' },
      {id: 4, naam:'Messi', value: 23, image:'https://i.seadn.io/gae/k8d4X_QVsEutq-ZVqDe1-0n_5B30oMVW6-m4IMDPbMW7_lrs-y0YVUp0uJJDI2vphnER9p-dwtvO0bvWKb0Qj-8dSAmluiCpkqE0jg?auto=format&dpr=1&w=384' },
      {id: 5, naam:'MoonBirds', value: 17, image:'https://i.seadn.io/gcs/files/572a78cfcee9456f0661af256769f950.png?auto=format&dpr=1&w=1000' }]
      
      const [selectedPunk,setSelectedPunk] = useState(0)


  return (
  <div className='app'>
    <Header />
    {
      punkListData.length > 0 && (
    <>
    <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
    <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
    </>
      )}
  </div>
  )
}

export default App;
