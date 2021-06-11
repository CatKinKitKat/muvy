
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import BoxRow from '../components/BoxRow'
import Hello from '../components/Hello'
import { fetchTopRatedMovies } from '../services/Caller'

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchTopRatedMovies())
    }
    fetchAPI()
  }, [])

  return (
    <Container>
      <Hello />
      <BoxRow list={ nowPlaying.slice(0, 6) } />
    </Container>
  )
}

export default Home
