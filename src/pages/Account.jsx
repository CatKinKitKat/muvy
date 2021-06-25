import { React, useState, useEffect } from 'react'
import AccountBox from '../components/boxes/AccountBox'
import { useHistory } from 'react-router-dom'

const Account = () => {

  const history = useHistory();

  if (localStorage.getItem('session_id') === null) {
    history.push("/login")
  }

  return (
    <AccountBox></AccountBox>
  )

}

export default Account
