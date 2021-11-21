import React, { useState } from 'react'
import { CompanyList } from "../../map/company";
import { CompanyExpanded } from "../../map/company/company-expanded";
import s from "./css/company.module.css"



export const CompanyScreen = ({ city, expanded, expand }) => {
    const [chosenCompany, setChosenCompany] = useState(0)
    console.log(city)
    console.log(chosenCompany)
    return (


        <div
            onClick={() => !expanded ? expand(2) : ''}
            className={`${!expanded ? 'Inactive' : 'Active'} Company`}
        >
            <div className={s.wrapper}>
                <div className={s.name}>{city.name}</div>
                <CompanyList
                    chosenCompany={chosenCompany}
                    setChosenCompany={setChosenCompany}
                    entries={city.entries}
                />
                <CompanyExpanded
                    entry={city.entries[chosenCompany]}
                />
            </div>
        </div >

    )
}