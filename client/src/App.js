import React, { useState, useCallback, useEffect } from 'react'
import './App.css';
import { GlobalMapScreen } from './components/screens/global-map-screen'
import {LocalMapScreen} from "./components/screens/local-map-screen";
import {CompanyScreen} from "./components/screens/company-screen";
import {JsonToObject} from "./jsons";

function App() {
    const [screen, changeScreen] = useState(0)

    const [allCountries, setAllCountries] = useState(()=>JsonToObject('countries-cities'));
    const [allDescriptions, setAllDescriptions] = useState(()=>JsonToObject('cities-descriptions'));

    const [countryName, setCountryName] = useState('at')
    const [cityName, setCityName] = useState('wien')

    const [selectedCountry, setSelectedCountry] = useState({})
    const [selectedCity, setSelectedCity] = useState({})

    useEffect(()=>{
        setSelectedCountry({[countryName]: allCountries?.[countryName]})
    }, [countryName])

    useEffect(()=>{
        setSelectedCity(allCountries?.[countryName]?.[cityName])
    }, [cityName])

    const expand = useCallback((value)=>{
        changeScreen(value)
    }, [])

    return (
        <div className="App">
            <GlobalMapScreen countries={allCountries} setCountry={setCountryName} setCity={setCityName} expanded={screen === 0} expand={expand} />
            <LocalMapScreen country={selectedCountry} setCountry={setCountryName} setCity={setCityName}  expanded={screen === 1} expand={expand} />
            <CompanyScreen city={cityName} expanded={screen === 2} expand={expand} />
        </div>
    );
}

export default App;
