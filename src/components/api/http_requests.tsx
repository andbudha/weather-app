
const baseCityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const baseCityKeyUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
const apiKey = 'SV4OAXoIzcmgFwuRp77D7d3n2J9aykGF';

export const getCityDetails = async (location: string) => {
    const result = await fetch(`${baseCityUrl}?apikey=${apiKey}&q=${location}`);
    const data = await result.json();
    return data[0];
}

export const getWeatherDetails = async (cityKey: string) => {
    const result = await fetch(`${baseCityKeyUrl}${cityKey}?apikey=${apiKey}`);
    const data = await result.json();
    return data[0];
}