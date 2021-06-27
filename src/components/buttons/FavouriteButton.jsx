import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { HeartFill } from 'react-bootstrap-icons'
import { getAccId, addToFavourites } from '../../services/Caller'

const FavouriteButton = (props) => {
  const setFav = (type, id) => {
    if (getAccId() !== null) {
      alert('Added to favourites\nTo remove go to your account page')
      addToFavourites(type, id)
    }
  }

  return (
    <Button variant="muted" className="fs-1 text-primary" onClick={() => { setFav(props.type, props.id) }}>
      <HeartFill style={{ fontSize: 'calc(100% + 1vw + 1vh)' }} />
    </Button>
  )
}

FavouriteButton.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string
}

export default FavouriteButton
