import React, { useState, useCallback} from 'react'
import {Map} from "../../map";




export const LocalMapScreen = ({country, setCountry, setCity, expanded, expand}) => {

    const clickCity = useCallback((value)=>{
        setCity(value)
        expand(2)
    },[])

    console.log(country)
    if(!expanded)
        return <div onClick={() => expand(1)} className='Inactive Local'>
            toggled
        </div>

    return(
        <div className='Active Local'>
            <Map crop={1.4} viewBox='0 0 1440 1024' countries={country} clickCountry={()=>{}} clickCity={clickCity} namespace='local'/>
        </div>
    )
}