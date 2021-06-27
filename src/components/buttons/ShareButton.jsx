import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { ShareFill } from 'react-bootstrap-icons'
import ShareRow from './ShareRow'

const ShareButton = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="muted" className="fs-1 text-primary" onClick={() => setIsOpen(true)}>
        <ShareFill style={{ fontSize: "calc(100% + 1vw + 1vh)" }} />
      </Button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={isOpen}
        onHide={() => {
          setIsOpen(false)
        }}
      >
        <Modal.Header closeButton >
          <Modal.Title>
            SHARE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShareRow title={props.title} shareUrl={window.location.href}></ShareRow>
        </Modal.Body>
      </Modal>
    </>
  )
}

ShareButton.propTypes = {
  title: PropTypes.string
}

export default ShareButton
