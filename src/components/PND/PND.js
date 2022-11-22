import React from 'react'
import PNDForm from '../PNDForm/PNDForm'
import './PND.css'
function PND({setVeryLastForm}) {
    return (
        <div className='hh'>
            <h2 className='io'>Partner Details</h2>
            <PNDForm setVeryLastForm={setVeryLastForm}/>
        </div>
    )
}

export default PND