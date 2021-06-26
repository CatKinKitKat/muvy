import { React, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Bookmark, BookmarkPlus, BookmarkCheckFill, BookmarkXFill } from 'react-bootstrap-icons'

const BookmarkButton = () => {
  return (
    <Button variant="muted" className="fs-1 text-primary"><Bookmark style={{ fontSize: "calc(100% + 1vw + 1vh)" }} /></Button>
  )
}

export default BookmarkButton
