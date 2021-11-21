import React, {useState, useEffect} from 'react'
import {ProgressBar} from "./progressBar";




export const ChatScreen = ({co2, message, initialize, commit, expanded, expand, class_}) => {
    const [client, setClient] = useState('The Unknown')
    const [money, setMoney] = useState(()=>10)
    const [error, setError] = useState(false)
    const [end, setEnd] = useState(false)
    useEffect(async ()=> {
        await initialize(client)
    }, [])
    if((co2 >= 100 || co2 <= 0)&&!end){
        console.log(co2)
        setEnd(true)
    }
    const clientHandler = (event) =>{
        setClient(event.target.value)
    }
    return(
        <div onClick={() => !expanded?expand(-1):''} className={`${!expanded?'Inactive':class_} Chat`} >
            <div className='ChatWindow'>
                {end && <div className='End'>{co2>=100 ? 'Nature won' : 'CO2 won' }</div>}
                <div className='ChatCo2'>CO2 impact: {co2}</div>
                <ProgressBar co2={co2} />
                <input className='Input' type='text' value={client} onChange={clientHandler}/>
                <div className='Balance'>
                    You are able to spend: {money}<div className='Coin'/>
                </div>
                <div className='EventButtons'>
                    <div className='EventButton' onClick={()=>commit(money, setMoney, -1, client, 1, 'Plant a tree', setError, end)}><div className='EventText'>Plant a tree</div> <div className='Up'>+1</div><div className='Leaf'/><div className='Money Down'>-1<div className='Coin'/></div></div>
                    <div className='EventButton' onClick={()=>commit(money, setMoney, -4, client, 2, 'Clean the reservoir', setError, end)}><div className='EventText'>Clean the reservoir</div><div className='Up'>+2</div><div className='Leaf'/><div className='Money Down'>-4<div className='Coin'/></div></div>
                    <div className='EventButton' onClick={()=>commit(money, setMoney, -10, client, 6, 'Create a nature reserve', setError, end)}><div className='EventText'>Create a nature reserve</div><div className='Up'>+6</div><div className='Leaf'/><div className='Money Down'>-10<div className='Coin'/></div></div>
                    <div className='EventButton' onClick={()=>commit(money, setMoney, +3,  client, -2, 'Use the non-chargeable battery', setError, end)}><div className='EventText'>Use the non-chargeable battery</div><div className='Down'>-2</div><div className='Leaf'/><div className='Money Up'>+3<div className='Coin'/></div></div>
                    <div className='EventButton' onClick={()=>commit(money, setMoney, +5, client, -3, 'Build the power plant', setError, end)}><div className='EventText'>Build the power plant</div><div className='Down'>-3</div><div className='Leaf'/><div className='Money Up'>+5<div className='Coin'/></div></div>
                    <div className='EventButton' onClick={()=>commit(money, setMoney, +7, client, -5, 'Build the factory', setError, end)}><div className='EventText'>Build the factory</div><div className='Down'>-5</div><div className='Leaf'/><div className='Money Up'>+7<div className='Coin'/></div></div>
                </div>
                {error && <div className='Error'>You don't have enough money to do that.</div>}
            </div>
            <div className='ChatDescription'>
                <p>
                    You have some <img className='Coin_'/>. You can develop your business to earn it, but ecology will fall. You need to find the balance with the other players between <img className='Coin_'/> and <img className='Leaf_'/>. Click it and save the nature!

                </p>
            </div>
        </div>
    )
}