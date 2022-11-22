import React from 'react'
import './LoginForm.css'
function LoginForm({setTriggerRegister,setTriggerLogin}) {
  function onPress() {
    setTriggerRegister(true);
  }
  function onLogin() {
    setTriggerLogin(true);
  }
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
        <button onClick={onLogin} className='sdf' type='submit'>LOGIN</button>
        <button onClick={onPress}>New User?Register here.</button>
        <div></div>
    </div>
  )
}

export default LoginForm