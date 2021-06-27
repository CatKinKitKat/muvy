import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { CalendarPlusFill } from 'react-bootstrap-icons'
import { getAccId, addToWatchList } from '../../services/Caller'

const WatchListButton = (props) => {

  const setFav = (type, id) => {
    alert("Added to wacthlist\nTo remove go to your account page")
    if (getAccId() !== null) {
      addToWatchList(type, id)
    }
  }

  return (
    <Button variant="muted" className="fs-1 text-primary" onClick={() => { setFav(props.type, props.id) }}>
      <CalendarPlusFill style={{ fontSize: "calc(100% + 1vw + 1vh)" }} />
      </Button>
  )
}

WatchListButton.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string
}

export default WatchListButton
