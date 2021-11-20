import React from 'react'

export const CompanyExpanded= ({entry}) => {
    console.log(entry)
    return(
        <div className='CompanyExpanded'>
            <div>{entry.name}</div>
            <div>{entry.type}</div>
            <div>{entry.total_sum}</div>
            <div>{entry.per_euro}</div>
            <div>{entry?.description}</div>
        </div>
    )
}