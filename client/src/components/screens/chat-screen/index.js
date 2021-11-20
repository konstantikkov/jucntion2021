import React from 'react'




export const ChatScreen = ({co2, message, commit, expanded, expand, class_}) => {

    return(
        <div onClick={() => !expanded?expand(-1):''} className={`${!expanded?'Inactive':class_} Chat`} >
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
            </div>
        </div>
    )
}