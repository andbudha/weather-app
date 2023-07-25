//api key
const key = 'jC35CfzUAWtBEfPALcB1XCffxaxiT8yz';

//getting city info
export const getCity = async (city: string) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

export const getWeather = async (cityKey: string) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${cityKey}?apikey=${key}`
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}





