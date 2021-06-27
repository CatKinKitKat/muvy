import { React, useState, useEffect } from 'react'
import AccountBox from '../components/boxes/AccountBox'
import { useHistory } from 'react-router-dom'
import { getAccountDetails } from '../services/Caller'

const Account = () => {
  
  const history = useHistory()
  const [details, setDetails] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setDetails(await getAccountDetails())
    }
    fetchAPI()
  }, [])

  if (localStorage.getItem('session_id') === null) {
    history.push('/login')
  }

  return (
    <AccountBox id={details.id} name={details.name} username={details.username}
      adult={details.include_adult} hash={details.hash} />
  )
}

export default Account
