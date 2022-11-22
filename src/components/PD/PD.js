import React from 'react'
import PDForm from '../PDForm/PDForm'
import './PD.css'
function PD({setNextForm}) {
    return (
        <div className='hh'>
            <h2 className='io'>Personal Details</h2>
            <PDForm setNextForm={setNextForm}/>
        </div>
    )
}

export default PD