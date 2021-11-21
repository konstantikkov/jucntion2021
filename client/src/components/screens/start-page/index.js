import React from 'react'
import s from "./css/index.module.css"
import map from "../../../assets/startPageMap.svg"
import leaf from "../../../assets/leaf.png"
import bg from "./background.svg"

export const StartPage = ({ setStart, expanded, expand }) => {
    if (!expanded)
        return <div onClick={() => expand(-2)} className='InactiveStart StartPage'>
            toggled
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
                        Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло.
                    </div>
                    <div className={s.button_block}>
                        <div className={s.but}>
                            <button onClick={() => {
                                setStart(false)
                                expand(0)
                            }}><img src={leaf} /></button>
                        </div>
                        <div className={s.but_text}>шобы узнать больше тыкай</div>
                    </div>
                </div>
                <div className={s.map_side}>
                    <img src={map} alt="map" />
                </div>
            </div>

        </div>
    )
}