import React, {useCallback, useRef} from 'react'


export const useWebSocket = (message, setMessage, setCo2) => {
    const socket = useRef();

    const initialize = useCallback((client)=>{
        socket.current = new WebSocket('ws://127.0.0.1:8888/ws')
        socket.current.onmessage = (async (value) => {
            const data = await JSON.parse(value.data)
            let message_old = message
            if(data?.client){
                message_old.push({
                    client: data.client,
                    value: data.value,
                    message: data.message
                })
                setMessage(message_old)
                setTimeout(()=>{
                    let old = message
                    console.log(old)
                    old.shift()
                    console.log(old)
                    setMessage(old)
                },1000)
            }
            setCo2(data.count)
        })
    }, [])

    const commit = useCallback((client, value, message) => {
        console.log(client)
        socket.current.send(JSON.stringify({
            client: client,
            value: value,
            message: message
        }))
    }, []);

    return({ initialize, commit })
}