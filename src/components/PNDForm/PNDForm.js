import React from 'react'
import './PNDForm.css'
function PNDForm({setVeryLastForm}) {
    function onNext() {
        setVeryLastForm(true);
    }
    return (
        <div>
            <form className='xaa'>
                <div className='fd'>
                    <label>Age</label>
                    <input type={'number'}/>
                    <input type={'number'}/>
                </div>
                <div className='fd'>
                    <label>Height</label>
                    <input type={'number'}/>
                    <input type={'number'}/>
                </div>
                <div className='fd'>
                    <label>Location</label>
                    <input />
                </div>
                <div className='fd'>
                    <label>Family Type</label>
                    <select>
                        <option>Joint</option>
                        <option>Nuclear</option>
                    </select>
                </div>
                <div className='fd'>
                    <label>Mangal</label>
                    <select>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className='fd'>
                    <button onClick={onNext} className='fdda'>Next</button>
                </div>
            </form>
        </div>
    )
}

export default PNDForm