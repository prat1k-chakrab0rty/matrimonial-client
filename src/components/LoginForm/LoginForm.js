import React from 'react'
import './LoginForm.css'
function LoginForm() {
  return (
    <div className='LoginForm'>
        <p className='a'>USER LOGIN</p>
        <div>
            <label>UserName</label>
            <input/>
        </div>
        <div>
            <label>Password</label>
            <input type="Password"/>
        </div>
        <button type='submit'>LOGIN</button>
        <div></div>
    </div>
  )
}

export default LoginForm