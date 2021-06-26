import { React, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Calendar, CalendarPlus, CalendarCheckFill, CalendarXFill } from 'react-bootstrap-icons'

const WatchListButton = () => {
  return (
    <Button variant="muted" className="fs-1 text-primary"><Calendar style={{ fontSize: "calc(100% + 1vw + 1vh)" }} /></Button>
  )
}

export default WatchListButton
