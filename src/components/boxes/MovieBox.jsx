import React from 'react'
import { Image, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const MovieBox = (props) => {
  const link = '/movie/' + props.id.toString()

  const nameHandle = (title) => {
    if (title.length >= 25) {
      return title.substring(0, 25) + '...'
    }
    return title
  }

  return (
    <>
      <Image
        variant="fluid"
        className="mx-auto d-block py-1"
        src={props.imgUrl}
        style={{
          maxHeight: '100%', maxWidth: '15vw'
        }} />
      <Button variant="outline" href={link}>
        <p className="fs-5 text-primary p-0">{nameHandle(props.title)} ({props.year})</p>
        <p className="fs-6 text-muted p-0">Classification: <strong className="fs-5 text-danger">{props.rating}</strong>
        </p>
      </Button>
    </>
  )
}

MovieBox.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string,
  imgUrl: PropTypes.string,
  rating: PropTypes.number
}

export default MovieBox
