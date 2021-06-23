import React from 'react'
import { Container, CardDeck, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import HomeMovieBox from './boxes/HomeMovieBox'

const HomeBoxRow = (props) => {
  const list = props.list.map((item, index) => {
    return (
      <Container className="d-flex p-0 pe-3 pb-1" key={index}>
        <HomeMovieBox title={item.title} year={item.year} imgUrl={item.poster} id={item.id}/>
      </Container>
    )
  })

  return (
    <Container className="pt-4 px-0" style={{overflowY: "scroll"}}>
      <CardDeck className="d-flex justify-content-start">
        {list}
      </CardDeck>
    </Container>
  )
}

HomeBoxRow.propTypes = {
  list: PropTypes.array
}

export default HomeBoxRow
