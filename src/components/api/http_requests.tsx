
const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const apiKey = 'jC35CfzUAWtBEfPALcB1XCffxaxiT8yz';


export const getCityDetails = async (location: string) => {
    const result = await fetch(`${baseUrl}?apikey=${apiKey}&q=${location}`);
    const data = await result.json();
    return data[0];
}