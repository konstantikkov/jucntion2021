import React from 'react'
import s from "./css/index.module.css"
import map from "../../../assets/startPageMap.svg"
import leaf from "../../../assets/leaf.png"
import bg from "./background.svg"

export const StartPage = ({ setStart, expanded, expand }) => {
    if (!expanded)
        return <div onClick={() => expand(-2)} className='InactiveStart StartPage'>
        </div>

    return (
        <div className={"ActiveStart StartPage"}
        >
            <div className={s.wrapper}>
                <div className={s.info_side}>
                    <div className={s.title}>
                        Project name
                    </div>
                    <div className={s.content}>
                        In our time, the problem of environmental pollution by the release of carbon dioxide (CO2) in various industries is quite acute. Our project allows you to track harmful emissions in various European cities, as well as analyze various industries and highlight the most harmful ones, comparing their profit in relation to the amount of carbon dioxide emitted.                    </div>
                    <div className={s.button_block}>
                        <div className={s.but}>
                            <button onClick={() => {
                                setStart(false)
                                expand(0)
                            }}><img src={leaf} /></button>
                        </div>
                        <p />
                        <div className={s.but_text}>Click to find out more</div>
                    </div>
                </div>
                <div className={s.map_side}>
                    <img src={map} alt="map" />
                </div>
            </div>

        </div>
    )
}