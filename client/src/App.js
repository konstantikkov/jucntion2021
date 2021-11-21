import React, { useState, useCallback, useEffect } from 'react'
import './App.css'
import './Map.css'
import { GlobalMapScreen } from './components/screens/global-map-screen'
import { LocalMapScreen } from "./components/screens/local-map-screen";
import { CompanyScreen } from "./components/screens/company-screen";
import { JsonToObject } from "./jsons";
import { useWebSocket } from "./hooks/ws.hook";
import { Event } from "./components/chat/event";
import { ChatScreen } from "./components/screens/chat-screen";
import { StartPage } from "./components/screens/start-page";
import bg from "./assets/background.svg"

function App() {
    const [co2, setCo2] = useState(50)
    const [message, setMessage] = useState(() => [])

    const { initialize, commit } = useWebSocket(message, setMessage, setCo2)


    const [start, setStart] = useState(true)

    const [screen, changeScreen] = useState(-2)

    const [allCompanies, setAllCompanies] = useState(() => JsonToObject('cities-companies'))
    const [allCountries, setAllCountries] = useState(() => JsonToObject('countries-cities'));
    const [allDescriptions, setAllDescriptions] = useState(() => JsonToObject('cities-descriptions'));

    const [countryName, setCountryName] = useState('at')
    const [cityName, setCityName] = useState('wien')

    const [selectedCountry, setSelectedCountry] = useState({})
    const [selectedCity, setSelectedCity] = useState({})

    useEffect(() => {
        setSelectedCountry({ [countryName]: allCountries?.[countryName] })
    }, [countryName])

    useEffect(() => {
        setSelectedCity({
            name: cityName,
            entries: allCompanies?.[cityName]
        })
    }, [cityName])

    if(message.length>3){
        let old_message = message.slice(-3)
        setMessage(old_message)
    }

    const expand = useCallback((value) => {
        changeScreen(value)
    }, [])
    return (
        <div className="App">
            <div className="MainLayer"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <ChatScreen co2={co2} initialize={initialize} message={message} commit={commit} expanded={screen === -1} expand={expand} class_={start ? 'ActiveStart' : 'Active'} />
                {
                    start && <StartPage setStart={setStart} expanded={screen === -2} expand={expand} />
                }
                {
                    !start && <React.Fragment>
                        <GlobalMapScreen countries={allCountries} setCountry={setCountryName} setCity={setCityName} expanded={screen === 0} expand={expand} />
                        <LocalMapScreen country={selectedCountry} setCountry={setCountryName} setCity={setCityName} expanded={screen === 1} expand={expand} />
                        <CompanyScreen city={selectedCity} expanded={screen === 2} expand={expand} />
                    </React.Fragment>
                }
            </div>
            <div className='NativeChat'>
                {
                    message.map(message_ => <Event client={message_?.client} mode={message_?.value < 0 ? 'BadEvent' : 'GoodEvent'} value={message_?.value} message={message_?.message} />)
                }
            </div>
        </div>
    );
}

export default App;
