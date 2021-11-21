import React from 'react'
import "./index.css"

export const CompanyExpanded = ({ entry, type }) => {
    console.log(type)
    return (
        <div className='CompanyExpanded'>
            <div className="name">{entry.name}</div>
            <div className="type">{entry.type}</div>
            <div className="total">Total sum: {entry.total_sum}</div>
            <div className="euro">Per euro: {entry.per_euro}</div>
            <div className="description">{entry?.description}</div>
            <div className='Description'>
                {
                    type?.text?.map((item)=><p>{item}</p>)
                }
            </div>
            <ul className='Bullets'>
                {
                    type?.bullets?.map((item)=><li>{item}</li>)
                }
            </ul>
            <div className='Citations'>
                {
                    type?.citations?.map((item)=><span>{item}</span>)
                }
            </div>
        </div>
    )
}