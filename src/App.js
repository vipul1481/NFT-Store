
import './App.css';
import Header from './components/header';
import CollectionCard from './components/CollectionCard';
import { useState , useEffect } from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
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
      const punkListData =[{id: 0, naam:'Asta', value: 7, image:'https://bafybeicorqtrzlcbwfvp445vg6t56gnv7kgevljaren5orxq5dsq5uw7tq.gateway.ipfscdn.io/2.jpg' },
      {id: 1, naam:'Asta', value: 7, image:'https://bafybeicorqtrzlcbwfvp445vg6t56gnv7kgevljaren5orxq5dsq5uw7tq.gateway.ipfscdn.io/2.jpg' },
      {id: 2, naam:'Asta', value: 7, image:'https://bafybeicorqtrzlcbwfvp445vg6t56gnv7kgevljaren5orxq5dsq5uw7tq.gateway.ipfscdn.io/2.jpg' },
      {id: 3, naam:'Asta', value: 7, image:'https://bafybeicorqtrzlcbwfvp445vg6t56gnv7kgevljaren5orxq5dsq5uw7tq.gateway.ipfscdn.io/2.jpg' },
      {id: 4, naam:'Asta', value: 7, image:'https://bafybeicorqtrzlcbwfvp445vg6t56gnv7kgevljaren5orxq5dsq5uw7tq.gateway.ipfscdn.io/2.jpg' },
      {id: 5, naam:'Asta', value: 7, image:'https://bafybeicorqtrzlcbwfvp445vg6t56gnv7kgevljaren5orxq5dsq5uw7tq.gateway.ipfscdn.io/2.jpg' }]

  return (
  <div className='app'>
    <Header />
    <Punklist punkListData={punkListData} />
  </div>
  )
}

export default App;
