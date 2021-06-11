import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'

const Box = (props) => {

  const goToMovie = () => {
    console.log("MUUUU")
  }

  return (
    <Card >
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body className="text-center">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>({props.year})</Card.Text>
        <Button variant="primary" className="p-1 px-5" onClick={goToMovie}>Visit</Button>
      </Card.Body>
    </Card>
  )
}

Box.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  imgUrl: PropTypes.string
}

export default Box
