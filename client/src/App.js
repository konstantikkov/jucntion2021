import React, { useState, useCallback, useEffect } from 'react'
import './App.css';
import { GlobalMapScreen } from './components/screens/global-map-screen'
import {LocalMapScreen} from "./components/screens/local-map-screen";
import {CompanyScreen} from "./components/screens/company-screen";
import {JsonToObject} from "./jsons";
import {useWebSocket} from "./hooks/ws.hook";
import {Event} from "./components/chat/event";
import {ChatScreen} from "./components/screens/chat-screen";

function App() {
    const [co2, setCo2] = useState(0)
    const [message, setMessage] = useState(()=>[])

    const {initialize, commit} = useWebSocket(message, setMessage, setCo2)

    useEffect(async ()=> {
        const client = prompt('user')
        await initialize(client)
    }, [])


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
    console.log(message)
    return (
        <div className="App">
            <div className="MainLayer">
                <ChatScreen co2={co2} message={message} commit={commit} expanded={screen === -1} expand={expand} />
                <GlobalMapScreen countries={allCountries} setCountry={setCountryName} setCity={setCityName} expanded={screen === 0} expand={expand} />
                <LocalMapScreen country={selectedCountry} setCountry={setCountryName} setCity={setCityName}  expanded={screen === 1} expand={expand} />
                <CompanyScreen city={cityName} expanded={screen === 2} expand={expand} />
            </div>
            <div className='NativeChat'>
                {
                    message.map(message_ => <Event client={message_?.client} mode={message_?.value < 0 ? 'BadEvent' : 'GoodEvent'} value={message_?.value} message={message_?.message}/>)
                }
            </div>
        </div>
    );
}

export default App;
