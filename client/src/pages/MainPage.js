import React, { useState, useEffect } from 'react'
import { useWebSocket } from "../hooks/ws.hook";

export const MainPage = () => {
    const [co2, setCo2] = useState(0)
    const [message, setMessage] = useState({})

    const {initialize, commit} = useWebSocket(setMessage, setCo2)

    useEffect(async ()=> {
        const client = prompt('user')
        await initialize(client)
    }, [])
    return(
        <div>
            <div>{co2}</div>
            <div>
                <div onClick={()=>commit(1)}>poop</div>
                <div onClick={()=>commit(2)}>pooop</div>
                <div onClick={()=>commit(3)}>poooop</div>
                <div onClick={()=>commit(-1)}>grow</div>
                <div onClick={()=>commit(-2)}>groww</div>
                <div onClick={()=>commit(-3)}>growww</div>
            </div>
            <div>
                {
                    message.client + message.value
                }
            </div>
        </div>
    )
}