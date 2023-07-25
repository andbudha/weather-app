
const baseCityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const baseCityKeyUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
const apiKey = 'IwBzaAoji50F40fF1qSeMWcEZUQxTvPy';

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