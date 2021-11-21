import React, { useState, useEffect } from 'react'
import { CompanyList } from "../../map/company";
import Graphics from '../../map/company/company-data';
import { CompanyExpanded } from "../../map/company/company-expanded";
import "./index.css"



export const CompanyScreen = ({ type, setType, city, expanded, expand }) => {
    const [chosenCompany, setChosenCompany] = useState(0)
    console.log(chosenCompany)
    console.log(city)
    console.log(chosenCompany)
    useEffect(() => {
        setType(city.entries[chosenCompany].type)
    }, [chosenCompany])

    useEffect(() => {
        setChosenCompany(0)
        console.log(chosenCompany)
    }, [city])
    return (
        <div
            onClick={() => !expanded ? expand(2) : ''}
            className={`${!expanded ? 'Inactive' : 'Active'} Company`}
        >
            <div className="wrapper">
                <div className="name">{city.name}</div>
                <CompanyList
                    chosenCompany={chosenCompany}
                    setChosenCompany={setChosenCompany}
                    entries={city.entries}
                />

                <div className="other">

                    <CompanyExpanded
                        entry={city.entries[chosenCompany] ? city.entries[chosenCompany] : city.entries[0]}
                        type={type}
                    />
                    <Graphics
                        total_sum={city.entries[chosenCompany]?.total_sum}
                        per_euro={city.entries[chosenCompany]?.per_euro}
                    />
                </div>
            </div>
        </div >

    )
}