import CountriesCities from './countries-cities'
import CitiesDescriptions from './cities-descriptions'
import CitiesCompanies from './cities-companies'

const JSONS = {
    'countries-cities': CountriesCities,
    'cities-descriptions': CitiesDescriptions,
    'cities-companies': CitiesCompanies
};

export const JsonToObject = (jsonName) => {
    return JSONS[jsonName]
};