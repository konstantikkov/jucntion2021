import React from 'react'

export const Event = ({client, value, message, mode}) => <div className={`Event ${mode}`}>
    <div className='EventHeader'>
        {client + value}
    </div>
    <div className='EventText'>
        {message}
    </div>
</div>
