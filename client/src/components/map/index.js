import React from 'react'
import { MapObject } from './map-object'


export const Map = ({ crop, europe, viewBox, countries, clickCountry, clickCity, namespace }) => {


    let currentCountry = []

    console.log(countries)

    return(
        <div
            style={{width: `calc(100vh - 4px)`}}
            className='Map'
        >
            <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
                {
                    <MapObject object={['europe']} namespace={namespace} />
                }
                {
                    Object.entries(countries).map((object, key) =>
                    {
                        currentCountry = object;
                        return(
                            <g className='Country' onClick={()=>clickCountry(object[0])}>
                                <MapObject key={key} object={object} namespace={namespace}/>
                                {
                                    currentCountry[1].map((city, key) =><MapObject key={key} object={[city]} click={clickCity} namespace={namespace}/>)
                                }
                            </g>
                        )
                    })
                }
            </svg>
        </div>
    )
}