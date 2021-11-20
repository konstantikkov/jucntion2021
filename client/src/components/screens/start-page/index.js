import React from 'react'




export const StartPage = ({setStart, expanded, expand}) => {
    if(!expanded)
        return <div onClick={() => expand(-2)} className='InactiveStart StartPage'>
            toggled
        </div>

    return(
        <div className='ActiveStart StartPage'>
            <button onClick={() => {
                setStart(false)
                expand(0)
            }}>sdfsdf</button>
        </div>
    )
}