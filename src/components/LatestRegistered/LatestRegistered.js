import React from 'react'
import { data } from '../../data/ru'
import LRBox from '../LRBox/LRBox'
import './LatestRegistered.css'

function LatestRegistered() {
    return (
        <div className='LR'>
            <h2 className='b'>Latest Registered</h2>
            {data.map(d => <LRBox details={d} />)}
        </div>
    )
}

export default LatestRegistered