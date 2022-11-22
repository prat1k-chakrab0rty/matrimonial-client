import React from 'react'
import LDForm from '../LDForm/LDForm'
import './LD.css'
function LD({setNextForm}) {
    return (
        <div className='hh'>
            <h2 className='io'>Login Details</h2>
            <LDForm setNextForm={setNextForm}/>
        </div>
    )
}

export default LD