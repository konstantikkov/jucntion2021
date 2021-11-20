import React, { useState, useCallback} from 'react'



export const City = ({click, com}) => {
    const [click, setClick] = useState()

    const clickCountry = useCallback((value)=>{
        setClick(value)
        console.log(value)
    },[])

    return(
        <svg width="2269" height="2560" viewBox="0 0 2269 2560" fill="none" xmlns="http://www.w3.org/2000/svg">

        </svg>
    )
}