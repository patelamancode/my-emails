import React from 'react'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div style={{backgroundColor:'#e8e8e8', padding:'25px'}}>
      <h1>Emails</h1>
      <NavLink to='/inbox' style={{marginRight:'20px'}}>Inbox</NavLink>
      <NavLink to='/sent'>Sent</NavLink>
    </div>
  )
}

export default LandingPage
