import { React, useEffect} from 'react'
import LogoutBox from '../components/boxes/LogoutBox'
import { logout } from '../services/Caller'

const Logout = () => {

  useEffect(() => {
    const fetchAPI = async () => {
      logout()
    }
    fetchAPI()
  }, [])

  return (
    <LogoutBox></LogoutBox>
  )
}

export default Logout
