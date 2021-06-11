import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Container } from 'react-bootstrap'
import SearchBar from '../components/SearchBar'

const Search = (props) => {
  return (
    <Container>
      <SearchBar />
      <Alert>{props.search}</Alert>
    </Container>
  )
}

Search.propTypes = {
  search: PropTypes.string
}

export default Search
