import React, {useState, useEffect} from 'react'




export const ChatScreen = ({co2, message, initialize, commit, expanded, expand, class_}) => {
    const [client, setClient] = useState('somebody')
    useEffect(async ()=> {
        await initialize(client)
    }, [])

    const clientHandler = (event) =>{
        setClient(event.target.value)
    }
    return(
        <div onClick={() => !expanded?expand(-1):''} className={`${!expanded?'Inactive':class_} Chat`} >
            <div>
                <div>{co2}</div>
                <input type='text' value={client} onChange={clientHandler}/>
                <div>
                    <div onClick={()=>commit(client, 1, 'построить завод')}>poop</div>
                    <div onClick={()=>commit(client, 2, 'построить завод')}>pooop</div>
                    <div onClick={()=>commit(client, 3, 'построить завод')}>poooop</div>
                    <div onClick={()=>commit(client, -1, 'посадить дерево')}>grow</div>
                    <div onClick={()=>commit(client, -2, 'посадить дерево')}>groww</div>
                    <div onClick={()=>commit(client, -3, 'посадить дерево')}>growww</div>
                </div>
            </div>
        </div>
    )
}