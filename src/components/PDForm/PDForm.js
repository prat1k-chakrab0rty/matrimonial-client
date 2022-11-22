import React from 'react'
import './PDForm.css'
function PDForm({ setNextForm }) {
    function onNext() {
        setNextForm(true);
    }
    return (
        <div>
            <form className='xaa'>
                <div className='fd'>
                    <label>First Name</label>
                    <input />
                </div>
                <div className='fd'>
                    <label>Middle Name</label>
                    <input />
                </div>
                <div className='fd'>
                    <label>Last Name</label>
                    <input />
                </div>
                <div className='fd'>
                    <label>Gender</label>
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className='fd'>
                    <label>Email</label>
                    <input />
                </div>
                <div className='fd'>
                    <label>Date Of Birth</label>
                    <input type={'datetime-local'} />
                </div>
                <div className='fd'>
                    <label>Mobile Number</label>
                    <input type={'number'} />
                </div>
                <div className='fd'>
                    <label>Religion</label>
                    <select>
                        <option>Hindu</option>
                        <option>Buddhist</option>
                        <option>Muslim</option>
                        <option>Cristian</option>
                        <option>Sikh</option>
                    </select>
                </div>
                <div className='fd'>
                    <label>Subcast</label>
                    <input />
                </div>
                <div className='fd'>
                    <label>Family Type</label>
                    <input type={'radio'} name='qwqw' />
                    <label>Joint</label>
                    <input type={'radio'} name='qwqw' />
                    <label>Nuclear</label>
                </div>
                <div className='fd'>
                    <button className='fdda' onClick={onNext}>Next</button>
                </div>
            </form>
        </div>
    )
}

export default PDForm