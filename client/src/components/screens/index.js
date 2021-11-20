import React, { useState, useCallback} from 'react'


export const Screen = () => {

    const [click, setClick] = useState()

    const clickCountry = useCallback((value)=>{
        setClick(value)
    },[])
    const countries={france : []}
    return(
        <div>
            <Map countries={countries} clickCountry={clickCountry} namespace='global'/>
        </div>
    )
}