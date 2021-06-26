import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FavouriteItemBox = (props) => {
  const link = '/' + props.type + '/' + props.id.toString()
  const nameHandle = (title) => {
    if (title.length >= 25) {
      return title.substring(0, 25) + '...'
    }
    return title
  }

  return (
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
  )
}

FavouriteItemBox.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string,
  imgUrl: PropTypes.string,
  type: PropTypes.string
}

export default FavouriteItemBox
