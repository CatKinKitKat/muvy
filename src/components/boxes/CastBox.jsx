import React from 'react'
import { Image, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const CastBox = (props) => {
  const link = '/person/' + props.id.toString()
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
        src={props.profileImg}
        style={{
          maxHeight: '100%', maxWidth: '15vw'
        }}
        roundedCircle />
      <Button variant="outline" href={link}>
        <p className="fs-4 text-primary p-0">{nameHandle(props.name)}</p>
        <p className="fs-6 text-muted p-0">
          as <strong className="text-danger">{props.character}</strong>
        </p>
      </Button>
    </>
  )
}

CastBox.propTypes = {
  id: PropTypes.number,
  profileImg: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string
}

export default CastBox
