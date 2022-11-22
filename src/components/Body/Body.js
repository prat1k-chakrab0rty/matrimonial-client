import React, { useState } from 'react'
import AD from '../AD/AD'
import AllDetails from '../AllDetails/AllDetails'
import LD from '../LD/LD'
import PD from '../PD/PD'
import PND from '../PND/PND'
import Poster from '../Poster/Poster'
import './Body.css'

function Body({ triggerRegister, triggerLogin }) {
  const [nextForm, setNextForm] = useState(false)
  const [veryNextForm, setVeryNextForm] = useState(false)
  const [veryLastForm, setVeryLastForm] = useState(false)
  return (
    <div className='xa'>
      <h2 className='taag'>MATCH PERFECT GROOM AND BRIDE</h2>
      {triggerLogin ? <AllDetails /> : !triggerRegister ? <Poster /> : veryLastForm ? <LD /> : veryNextForm ? <PND setVeryLastForm={setVeryLastForm} /> : nextForm ? <AD setVeryNextForm={setVeryNextForm} /> : <PD setNextForm={setNextForm} />}
    </div>
  )
}

export default Body