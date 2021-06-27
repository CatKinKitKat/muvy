import React from 'react'
import { Container, CardDeck } from 'react-bootstrap'
import PropTypes from 'prop-types'
import FavouriteItemBox from './boxes/FavouriteItemBox'

const FavouriteItemBoxRow = (props) => {
  const list = props.list.map((item, index) => {
    return (
      <Container className="d-flex" key={index}>
        <FavouriteItemBox title={item.title} year={item.year} imgUrl={item.poster} id={item.id} type={props.type} list={props.list_type} />
      </Container>
    )
  })

  return (
    <Container className="p-4" style={{ overflowY: "scroll" }}>
      <CardDeck className="d-inline-flex justify-content-start">
        {list}
      </CardDeck>
    </Container>
  )
}

FavouriteItemBoxRow.propTypes = {
  list: PropTypes.array,
  type: PropTypes.string,
  list_type: PropTypes.string
}

export default FavouriteItemBoxRow
