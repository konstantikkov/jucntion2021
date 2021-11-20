import React, {useCallback, useRef} from 'react'


export const useWebSocket = (setMessage, setCo2) => {
    const socket = useRef();
    const client_ = useRef()

    const initialize = useCallback(async (client)=>{
        socket.current = new WebSocket('ws://127.0.0.1:8888/ws')
        client_.current = client
        socket.current.onmessage = (async (value) => {
            console.log(value.data)
            const data = await JSON.parse(value.data)
            if(data?.client){
                setMessage({
                    client: data.client,
                    value: data.value
                })
            }
            setCo2(data.count)
        })
    }, [])

    const commit = useCallback((value) => {
        socket.current.send(JSON.stringify({
            client: client_.current,
            value: value
        }))
    }, []);

    return({ initialize, commit })
}