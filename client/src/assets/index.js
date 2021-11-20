import React from 'react'
import globalAssets from './global'
import localAssets from './local'


export const AssetWrapper = ({pathName, path, click}) => {
    return(<g onClick={() => click(pathName)}>
        {path}
    </g>)
}

export const getAsset = ({pathName, namespace, click=()=>{}}) => {
    if(namespace === 'local'){
        return <AssetWrapper path={localAssets[pathName]} click={click} pathName={pathName} />
    }
    return <AssetWrapper path={globalAssets[pathName]} click={click} pathName={pathName}/>
};
