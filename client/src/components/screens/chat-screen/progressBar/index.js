import React from 'react'

export const ProgressBar = ({co2}) => {
    return(
        <div className='ProgressBar'>
            <div className='Radiant' style={{
                width: `${Math.abs(co2)}%`
            }}/>
            <div className='Dire' style={{
    width: `${100 - Math.abs(co2)}%`
}}/>
        </div>
    )
}