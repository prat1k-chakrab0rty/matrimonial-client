import React from 'react'
import './LDForm.css'
function LDForm({ setNextForm }) {
    function onNext() {
        setNextForm(true);
    }
    return (
        <div>
            <form className='xaa'>
                <div className='fd'>
                    <label>UserName</label>
                    <input />
                </div>
                <div className='fd'>
                    <label>Password</label>
                    <input type={'password'}/>
                </div>
                <div className='fd'>
                    <label>Confirm Password</label>
                    <input type={'password'}/>
                </div>

                <div className='fd'>
                    <button className='fdda'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default LDForm