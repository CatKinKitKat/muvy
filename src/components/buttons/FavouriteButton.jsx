import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { Heart, HeartHalf, HeartFill } from 'react-bootstrap-icons'
import { getAccId, addToFavourites } from '../../services/Caller'

const FavouriteButton = (props) => {

  const setFav = (acc_id, type, id) => {
    if (getAccId() !== null) {
      addToFavourites(acc_id, type, id)
    }
  }

  return (
    <Button variant="muted" className="fs-1 text-primary" onClick={() => { setFav(props.type, props.id) }}>
      <Heart style={{ fontSize: "calc(100% + 1vw + 1vh)" }} />
      </Button>
  )
}

FavouriteButton.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string
}

export default FavouriteButton
