import CountriesCities from './countries-cities'
import CitiesDescriptions from './cities-descriptions'

const JSONS = {
    'countries-cities': CountriesCities,
    'cities-descriptions': CitiesDescriptions
};

export const JsonToObject = (jsonName) => {
    return JSONS[jsonName]
};