import React from 'react'




export const CompanyScreen = ({city, expanded, expand}) => {
    if(!expanded)
        return <div onClick={expand} className='Inactive Company'>
            toggled
        </div>
    return(
        <div className='Active Company'>
            {city}
        </div>
    )
}