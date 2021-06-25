import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'


const AccountBox = (props) => {

  const imgLink = (hash) => {
    return "https://www.gravatar.com/avatar/" + hash
  }

  const matureIndicator = (flag) => {
    if (flag) {
      return (
        <strong className="text-success">activated</strong>
      )
    } else {
      return (
        <strong className="text-danger">deactivated</strong>
      )
    }
  }

  return (
    <Container fluid className="p-0 m-0">
      <Col className="bg-dark">
        <Row className="p-5 pb-0">
          <Col>
            <Image src={imgLink("")} style={{ aspectRatio: "1/1", width: "12.5rem" }} roundedCircle />
          </Col>
          <Col className="">
            <div className="text-end">
              <h5 className="text-white">{props.name}</h5>
              <h1 className="text-white">{props.username}</h1>
            </div>
          </Col>
        </Row>
        <Col className="px-2 pb-4">
          <Button variant="danger" className="float-end p-2" href="/logout">Log Out</Button>
        </Col>
        <Row>
          <p className="text-white px-4">Mature Content is {matureIndicator(props.mature)}.</p>
        </Row>
      </Col>

    </Container>
  )
}

AccountBox.propTypes = {
  id: PropTypes.number,
  hash: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  mature: PropTypes.boolean
}

export default AccountBox
