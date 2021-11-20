import React from 'react'

import { getAsset } from '../../../assets'

export const MapObject = ({click, object, namespace}) => {
    const objectPath = getAsset({pathName: object[0], namespace: namespace, click: click});
    return objectPath
}