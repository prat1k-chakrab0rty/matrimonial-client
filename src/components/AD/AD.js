import React from 'react'
import ADForm from '../ADForm/ADForm'
import './AD.css'
function AD({setVeryNextForm}) {
    return (
        <div className='hh'>
            <h2 className='io'>Address Details</h2>
            <ADForm setVeryNextForm={setVeryNextForm}/>
        </div>
    )
}

export default AD