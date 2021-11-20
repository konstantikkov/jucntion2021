import React, {useEffect} from 'react'
import {useWebSocket} from "../../../hooks/ws.hook";




export const ChatScreen = ({co2, message, commit, expanded, expand}) => {


    if(!expanded)
        return <div onClick={() => expand(-1)} className='Inactive Company'>

        </div>


    return(
        <div className='Active Chat'>
            <div>
                <div>{co2}</div>
                <div>
                    <div onClick={()=>commit(1, 'построить завод')}>poop</div>
                    <div onClick={()=>commit(2, 'построить завод')}>pooop</div>
                    <div onClick={()=>commit(3, 'построить завод')}>poooop</div>
                    <div onClick={()=>commit(-1, 'посадить дерево')}>grow</div>
                    <div onClick={()=>commit(-2, 'посадить дерево')}>groww</div>
                    <div onClick={()=>commit(-3, 'посадить дерево')}>growww</div>
                </div>
                <div>
                    {
                        toString(message.client) + toString(message.value)
                    }
                </div>
            </div>
        </div>
    )
}