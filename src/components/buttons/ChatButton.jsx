import { React, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { ChatLeftDots, ChatLeftDotsFill } from 'react-bootstrap-icons'

const ChatButton = () => {
  return (
    <Button variant="muted" className="fs-1 text-primary"><ChatLeftDots style={{ fontSize: "calc(100% + 1vw + 1vh)" }} /></Button>
  )
}

export default ChatButton
