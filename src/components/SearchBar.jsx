import React from 'react'
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap'

const SearchBar = () => {
  function search () {

  }

  return (
    <Container className="pt-5">
      <InputGroup>
        <FormControl placeholder="Find movies, series and more" />
        <Button onClick={search}>Search</Button>
      </InputGroup>
    </Container>
  )
}

export default SearchBar
