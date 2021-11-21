import React from 'react'
import './index.css'
export const CompanyItem = ({ key, value, name, setChosenCompany, isChosen }) => {
    console.log(name)
    return (
        <div
            onClick={() => !isChosen ? setChosenCompany(value) : ''}
            className={`${isChosen ? 'CompanyItem' : 'ChosenCompanyItem'}`}
        >
            <div>{name}</div>
        </div>
    )
}