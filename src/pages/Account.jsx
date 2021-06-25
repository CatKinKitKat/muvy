import { React, useState, useEffect}  from 'react'
import AccountBox from '../components/boxes/AccountBox'
import { checkLogin } from '../services/Caller'

const Account = () => {

  if (sessionStorage.getItem('session_id') === null) {
    window.location.replace("/login")
  }

  return (
    <AccountBox></AccountBox>
  )

}

export default Account
