import React from 'react'

interface Props {
    onClick: React.MouseEventHandler;
}

const overlay: React.FC<Props> = (props) => {
    return (
        <div onClick={props.onClick} className='absolute bg-slate-800/50 inset-0 rounded-md hover:cursor-pointer'></div>
    )
}

export default overlay