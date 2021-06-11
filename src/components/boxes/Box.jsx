import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

const Box = (props) => {
  return (
    <Card>
      <h1>{props.text}</h1>
    </Card>
  )
}

Box.propTypes = {
  text: PropTypes.string
}

export default Box
