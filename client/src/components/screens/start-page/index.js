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
                        We present to you an interactive map of Europe, on which you can observe several companies and analyze their impact on the environment. We used a dataset that showed how much CO₂ companies of different fields emit. Using another dataset with sales we calculated the total amount of co2 companies produced versus the money they earned. This graphical data give us a better understanding of how much we contaminate the planet. Additionally, you can read facts and environmental advice that were gathered from proven sources. Potential shareholders will be able to form a rough understanding of fields and make their comparisons.
                        <p />
                        Additionally, to gamify the experience, we Implemented a simple app, that allows users to compete for our planet's future in real-time. You can choose between earning money, but harming the field or losing money by saving our planet. Exactly like in real life.
                    </div>
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