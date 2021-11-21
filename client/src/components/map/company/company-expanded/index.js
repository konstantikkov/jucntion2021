import React from 'react'
import "./index.css"

export const CompanyExpanded = ({ entry }) => {
    console.log(entry)
    return (
        <div className='CompanyExpanded'>
            <div className="name">{entry.name}</div>
            <div className="type">{entry.type}</div>
            <div className="total">Total sum: {entry.total_sum}</div>
            <div className="euro">Per euro: {entry.per_euro}</div>
            <div className="description">{entry?.description}</div>
        </div>
    )
}