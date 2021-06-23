import React from 'react'
import { Redirect } from 'react-router-dom'
import AccountBox from '../components/boxes/AccountBox'
import { checkLogin } from '../services/Caller'

const Account = () => {

  if (checkLogin()) {
    return (
      <Redirect to='/login'></Redirect>
    )
  }

  return (
    <AccountBox></AccountBox>
  )

}

export default Account
