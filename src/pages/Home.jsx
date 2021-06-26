import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import HomeBoxRow from '../components/HomeBoxRow'
import Hello from '../components/Hello'
import { fetchMovies } from '../services/Caller'

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies('now_playing', 1))
    }
    fetchAPI()
  }, [])

  return (
    <Container>
      <Hello />
      <HomeBoxRow list={ nowPlaying.slice(0, 10) } />
    </Container>
  )
}

export default Home
