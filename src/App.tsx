import React from 'react';
import './App.css';
import {AppContainer} from "./components/AppContainer/AppContainer";

function App() {

    //api key
    const key = 'jC35CfzUAWtBEfPALcB1XCffxaxiT8yz';

    //getting city info
    const getCity = async (city: string) => {
        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${key}&q=${city}`
        const response = await fetch(base+query);
        const data = await response.json();
        console.log(data[0]);
    }


    return (
    <div className="App">
      <AppContainer getCityKey={getCity}/>
    </div>
  );
}

export default App;
