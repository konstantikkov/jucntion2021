import React from 'react'
import { CompanyItem } from "./company-item";
import "./index.css"



export const CompanyList = ({ chosenCompany, setChosenCompany, entries }) => {
    console.log(entries)
    return (
        <div className='CompanyWrapper'        >
            {entries.map((entry, key) =>
                <CompanyItem
                    key={key}
                    value={key}
                    isChosen={chosenCompany === key}
                    setChosenCompany={setChosenCompany}
                    name={entry.name}
                />)}
        </div>
    )
}