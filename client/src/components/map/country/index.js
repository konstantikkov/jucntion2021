import React, { useState, useCallback } from 'react'

import { getAsset } from '../../../assets'

export const Country = ({click, country, namespace}) => {

    const countryPath = getAsset({pathName: country[0], namespace: namespace, click: click});
    console.log(countryPath)
    console.log(country)
    return(
        <React.Fragment>
            {
                countryPath
            }
        </React.Fragment>
    )
}