import React from 'react'
import PropTypes from 'prop-types'

const Error = (props) => {
  return (
    <h1>{props.type}</h1>
  )
}

Error.propTypes = {
  type: PropTypes.string
}

export default Error
