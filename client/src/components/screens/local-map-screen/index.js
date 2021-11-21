import React, { useState, useCallback} from 'react'
import {Map} from "../../map";




export const LocalMapScreen = ({country, setCountry, setCity, expanded, expand}) => {

    const clickCity = useCallback((value)=>{
        setCity(value)
        expand(2)
    },[])


    return(
        <div onClick={() => !expanded?expand(1):''} className={`${!expanded?'Inactive':'Active'} Local`}>
            <Map expanded={expanded} viewBox='0 0 1000 1000' countries={country} clickCountry={()=>{}} clickCity={clickCity} namespace='local'/>
        </div>
    )
}