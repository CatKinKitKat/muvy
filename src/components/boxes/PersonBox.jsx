import React from 'react'
import { Image, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const PersonBox = (props) => {
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
        }} />
      <Button variant="outline" href={link}>
        <p className="fs-4 text-primary p-0">{nameHandle(props.name)}</p>
        <p className="fs-6 text-muted p-0">
          Trending for <strong className="text-danger">{props.known}</strong>
        </p>
      </Button>
    </>
  )
}

PersonBox.propTypes = {
  id: PropTypes.number,
  profileImg: PropTypes.string,
  name: PropTypes.string,
  known: PropTypes.string
}

export default PersonBox
