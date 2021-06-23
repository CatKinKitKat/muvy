import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import ModalVideo from 'react-modal-video'
import "react-modal-video/css/modal-video.min.css"

const VideoModal = (props) => {

  const [isOpen, setOpen] = useState(false)

  // Componente Outdated mas a melhor escolha enquanto funciona; este usa o metodo Transition que vai ser deprecado
  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={props.link} onClose={() => setOpen(false)} />
      <Button variant="danger" onClick={
        () => setOpen(true)
      } className="mt-auto p-2">Trailer</Button>
    </React.Fragment>
  )
}

VideoModal.propTypes = {
  link: PropTypes.string
}

export default VideoModal