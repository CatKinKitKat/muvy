import React, { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import { Button, Card } from 'react-bootstrap'
import Modal from '../VideoModal'
import { fetchTrailer } from '../../services/Caller'

const HomeMovieBox = (props) => {

  const [key, setVideo] = useState([]);
  const name = props.title
  const link = "/movie/" + props.id.toString()

  useEffect(() => {
    const fetchAPI = async () => {
      setVideo(await fetchTrailer(props.id));
    }
    fetchAPI();
  }, [])

  return (
    <Card style={{ width: '12.5rem' }}>
      <Card.Img variant="top" src={props.imgUrl} style={{aspectRatio: "10/16"}}/>
      <Card.Body className="text-center d-flex flex-column">
        <Button variant="outline" className="fs-4 m-auto p-1" href={link}>
          {name.substring(0, 21)} <p className="fs-6 text-muted">
            ({props.year})
          </p>
        </Button>
        <Modal link={key} />
      </Card.Body>
    </Card>
  )
}

HomeMovieBox.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string,
  imgUrl: PropTypes.string
}

export default HomeMovieBox
