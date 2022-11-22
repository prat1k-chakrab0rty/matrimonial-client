import React from 'react'
import './ADForm.css'
function ADForm({setVeryNextForm}) {
    function onNext() {
        setVeryNextForm(true);
    }
    return (
        <div>
            <form className='xaa'>
                <div className='fd'>
                    <label>Address 1</label>
                    <input />
                </div>
                <div className='fd'>
                    <label>Address 2</label>
                    <input />
                </div>
                <div className='fd'>
                    <label>City</label>
                    <input />
                </div>
                <div className='fd'>
                    <label>State</label>
                    <input />
                </div>
                <div className='fd'>
                    <label>Pin Code</label>
                    <input type={'number'} />
                </div>
                <div className='fd'>
                    <label>Area Code</label>
                    <input type={'number'}/>
                </div>
                <div className='fd'>
                    <label>Landline Number</label>
                    <input type={'number'}/>
                </div>
                
                <div className='fd'>
                    <button onClick={onNext} className='fdda'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default ADForm