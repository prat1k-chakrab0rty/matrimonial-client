import React from 'react'
import './LRBox.css'

function LRBox({details}) {
    return (
        <div className='i'>
            <h2 className='c'>{details.name}</h2>
            <div className='f'>
                <img alt='pic' className='g' src='https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg'/>
                <div className='h'>
                    <p className='d'>Age-{details.age}</p>
                    <p className='d'>{details.religion}</p>
                    <button className='e'>View Profile</button>
                </div>
            </div>
        </div>
    )
}

export default LRBox