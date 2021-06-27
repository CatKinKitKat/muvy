import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CreditBox = (props) => {
  const link = '/' + props.type + '/' + props.id.toString()

  return (
    <Card style={{ width: '12.5rem' }} variant="outline">
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Card.Img variant="top" src={props.imgUrl} style={{ objectFit: 'cover', aspectRatio: '1/1' }} />
        <Card.Title className="text-primary text-center fs-4">
          <strong className="text-muted text-center fs-5">As<br /></strong>
          {props.character}
        </Card.Title>
        <Card.Text className="text-secondary text-center fs-5">
          <strong className="text-muted text-center fs-6">in<br /></strong>
          {props.title}
        </Card.Text>
      </Link>
    </Card>
  )
}

CreditBox.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  character: PropTypes.string,
  imgUrl: PropTypes.string,
  type: PropTypes.string
}

export default CreditBox
