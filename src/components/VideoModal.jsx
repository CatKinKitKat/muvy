import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { fetchTrailer } from '../services/Caller'

export const VideoModal = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [key, setVideo] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setVideo(await fetchTrailer(props.id))
    }
    fetchAPI()
  }, [])

  const youtubeUrl = 'https://www.youtube.com/watch?v=' + key
  return (

    <>
      <Button onClick={() => setIsOpen(true)} variant={props.color}>WATCH TRAILER</Button>
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
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ color: '#000000', fontWeight: 'bolder' }}
          >
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#000000' }}>
          <ReactPlayer
            className="container-fluid"
            url={youtubeUrl}
            playing
            width="100%"
          >
          </ReactPlayer>
        </Modal.Body>
      </Modal>
    </>
  )
}

VideoModal.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  color: PropTypes.string
}

export default VideoModal
