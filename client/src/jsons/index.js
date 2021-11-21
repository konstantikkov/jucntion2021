import CountriesCities from './countries-cities'
import CitiesDescriptions from './cities-descriptions'
import CitiesCompanies from './cities-companies'
import TypesDescriptions from './description-to-types'

const JSONS = {
    'description-to-types': TypesDescriptions,
    'countries-cities': CountriesCities,
    'cities-descriptions': CitiesDescriptions,
    'cities-companies': CitiesCompanies
};

export const JsonToObject = (jsonName) => {
    return JSONS[jsonName]
};