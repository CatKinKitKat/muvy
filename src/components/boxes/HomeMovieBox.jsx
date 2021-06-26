import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import VideoModal from '../VideoModal'

const HomeMovieBox = (props) => {
  const link = '/movie/' + props.id.toString()
  const nameHandle = (title) => {
    if (title.length >= 25) {
      return title.substring(0, 25) + '...'
    }
    return title
  }

  return (
    <Card style={{ width: '12.5rem' }}>
      <Link to={link}>
        <Card.Img variant="top" src={props.imgUrl} style={{ aspectRatio: '10/16' }} />
      </Link>
      <Card.Body className="text-center d-flex flex-column">
        <Button variant="outline" className="fs-5 m-auto p-1" href={link}>
          {nameHandle(props.title)} <p className="fs-6 text-muted">
            ({props.year})
          </p>
        </Button>
        <VideoModal id={props.id} title={props.title} color="danger" />
      </Card.Body>
    </Card>
  )
}

HomeMovieBox.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string,
  imgUrl: PropTypes.string
}

export default HomeMovieBox
