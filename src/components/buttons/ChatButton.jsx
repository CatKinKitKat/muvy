import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { ChatLeftDotsFill } from 'react-bootstrap-icons'

const ChatButton = (props) => {

  const link = "/discussion/" + props.type + "/" + props.id

  return (
    <Button variant="muted" className="fs-1 text-primary" href={link}>
      <ChatLeftDotsFill style={{ fontSize: "calc(100% + 1vw + 1vh)" }} />
    </Button>
  )
}

ChatButton.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number
}

export default ChatButton
