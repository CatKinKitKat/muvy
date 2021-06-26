import { React, useEffect, useState } from 'react'
import { Dropdown, Container, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import MovieBox from '../components/boxes/MovieBox'
import { fetchMovies } from '../services/Caller'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState([])
  const { sort_type } = useParams()

  useEffect(() => {
    const fetchAPI = async () => {
      setTitle(sort_type.toUpperCase().replace(/_/g, ' ') + ' MOVIES')
      setMovies(await fetchMovies(sort_type, 1))
    }
    fetchAPI()
  }, [])

  const movieList = movies.map((item, index) => {
    return (
      <Col className="text-center" key={index}>
        <MovieBox id={item.id} title={item.title} year={item.year} rating={item.rating} imgUrl={item.poster}></MovieBox>
      </Col>
    )
  })

  return (
    <Container>
      <Row className="p-1">
        <Col>
          <h1 className="pt-3">{title}</h1>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic" className="fs-4 text-secondary">
              SORT
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/movies/trending">TRENDING</Dropdown.Item>
              <Dropdown.Item href="/movies/top_rated">TOP RATED</Dropdown.Item>
              <Dropdown.Item href="/movies/now_playing">NOW PLAYING</Dropdown.Item>
              <Dropdown.Item href="/movies/popular">POPULAR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        {movieList}
      </Row>
    </Container>
  )
}

export default Movies
