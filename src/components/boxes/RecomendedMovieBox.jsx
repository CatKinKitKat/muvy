import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'

const RecomendedMovieBox = (props) => {
  return (
    <Card>
      <Link to={`/movie/${props.id}`}>
        <Card.Img className="img-fluid" src={props.poster} />
      </Link>
      <Card.Body className="">
        <Button variant="outline" className="fs-5 m-auto p-1" href={`/movie/${props.id}`}>
          <h3>{props.title}</h3>
          Rated: <strong className="text-danger">{props.rating}</strong>
        </Button>
      </Card.Body>
    </Card>
  )
}

RecomendedMovieBox.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number

}

export default RecomendedMovieBox
