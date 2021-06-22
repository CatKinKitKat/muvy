import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { Button, Card } from 'react-bootstrap'
import Modal from '../../components/VideoModal'
import { fetchTrailer } from '../../services/Caller'

const Box = (props) => {

  const [key, setVideo] = useState([]);
  const name = props.title

  useEffect(() => {
    const fetchAPI = async () => {
      setVideo(await fetchTrailer(props.id));
    }
    fetchAPI();
  }, [])

  return (
    <Card >
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body className="text-center d-flex flex-column">
        <Button variant="outline" className="fs-5">
          {name.substring(0, 21)} <p className="fs-6 text-muted">
            ({props.year})
            </p>
        </Button>
        <Modal link={key} />
      </Card.Body>
    </Card>
  )
}

Box.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string,
  imgUrl: PropTypes.string
}

export default Box
