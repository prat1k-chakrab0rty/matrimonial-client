import React ,{useState} from 'react'
import './Grid.css'
import LoginForm from '../LoginForm/LoginForm'
import SearchArea from '../SearchArea/SearchArea'
import LatestRegistered from '../LatestRegistered/LatestRegistered'
import Body from '../Body/Body'

function Grid() {
    const [triggerRegister, setTriggerRegister] = useState(false)
    const [triggerLogin, setTriggerLogin] = useState(false)
    return (
        <div>
            <table>
                <tr>
                    <td className='b1'>
                        <LoginForm setTriggerRegister={setTriggerRegister} setTriggerLogin={setTriggerLogin}/>
                    </td>
                    <td className='b2'>
                        <SearchArea />
                    </td>
                </tr>
                <tr>
                    <td className='b1'>
                        <LatestRegistered />
                    </td>
                    <td className='b2'>
                        <Body triggerRegister={triggerRegister} triggerLogin={triggerLogin}/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Grid