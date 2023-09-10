import React from 'react'
import Spin from './Spin.gif'

export default function Spinner() {
    return (
        <div className='text-center img'>
            <img className='m-2' src={Spin} alt="Error404" style={{width : "75px" , height : "75px"}} />
        </div>
    )
}
