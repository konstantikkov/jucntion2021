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
    if(!expanded)
        return <div onClick={() => expand(0)} className='Inactive Global'>
            toggled
        </div>
    return(
        <div className='Active Global'>
            <Map europe crop={1.4} viewBox='0 0 1440 1024' countries={countries} clickCountry={clickCountry} clickCity={clickCity} namespace='global'/>
        </div>
    )
}