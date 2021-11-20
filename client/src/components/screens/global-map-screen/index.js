import React, { useState, useCallback} from 'react'
import {Map} from "../../map";




export const GlobalMapScreen = ({countries, setCountry, setCity, expanded, expand}) => {
    const [click, setClick] = useState()

    const clickCountry = useCallback((value)=>{
        console.log(value)
        setCountry(value)
        expand(1)
    },[])

    const clickCity = useCallback((value)=>{
        expand(2)
        setCity(value)
    },[])
    return(
        <div onClick={() => !expanded?expand(0):''} className={`${!expanded?'Inactive':'Active'} Global`}>
            <Map europe crop={1.4} viewBox='0 0 1440 1024' countries={countries} clickCountry={clickCountry} clickCity={clickCity} namespace='global'/>
        </div>
    )
}