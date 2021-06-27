import React, { useEffect, useState } from 'react'
import SearchBox from './boxes/SearchBox';
import { Col, Row, Container } from 'react-bootstrap'
import { fetchSearch } from "../services/Caller";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const [movies, setMovies] = useState([])
  useEffect(async () => {
    const fetchAPI = async () => {
      console.log(searchValue)
      if (searchValue !== '') {
        setMovies(await fetchSearch(searchValue, 1))
      }
    }
    await fetchAPI()
  }, [searchValue])

  const movieList = movies.map((item, index) => {
    return (
      <Col className="text-center" key={index}>
        <SearchBox id={item.id} type={item.type} title={item.title} year={item.year} rating={item.rating} imgUrl={item.poster} />
      </Col>
    )
  })

  return (
    <Container>
      <Row className='d-flex align-items-center mt-4 mb-4'>
        <Col className='col-sm-4 flex-grow-1'>
          <input
            className='form-control'
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder='Type to search...'
          />
        </Col>
        <Row className="pt-5">
          {movieList}
        </Row>
      </Row>
    </Container>
  )
}

export default SearchBar