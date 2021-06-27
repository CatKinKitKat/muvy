import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { removeFromFavourites, removeFromWatchList } from '../../services/Caller'

const FavouriteItemBox = (props) => {

  const history = useHistory()
  const link = '/' + props.type + '/' + props.id.toString()
  const nameHandle = (title) => {
    if (title.length >= 15) {
      return title.substring(0, 15) + '...'
    }
    return title
  }

  const unsetFav = async (type, id, list) => {
    if (list === "favourites") {
      await removeFromFavourites(type, id)
    } else if (list === "watchlist") {
      await removeFromWatchList(type, id)
    }
    location.reload()
  }

  return (
    <div className="d-flex flex-column">
      <Card style={{ width: '12.5rem' }}>
        <Link to={link}>
          <Card.Img variant="top" src={props.imgUrl} style={{ objectFit: "cover", aspectRatio: '1/1' }} />
          <Card.ImgOverlay className="text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
            <Card.Text className="text-secondary">
              ({props.year})
            </Card.Text>
            <Card.Title className="fs-1">
              {nameHandle(props.title)}
            </Card.Title>
          </Card.ImgOverlay>
        </Link>
      </Card>
      <Button variant="danger" className="p-1" onClick={() => { unsetFav(props.type, props.id, props.list) }}>Remove</Button>
    </div>
  )
}

FavouriteItemBox.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string,
  imgUrl: PropTypes.string,
  type: PropTypes.string,
  list: PropTypes.string
}

export default FavouriteItemBox
