import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Image } from 'react-bootstrap'

const AccountBox = (props) => {

  const imgLink = "https://www.gravatar.com/avatar/" + props.hash

  return (
    <Container>
      <Row>
        <Col>
          <Image src={imgLink} rounded />
        </Col>
        <Col>

        </Col>
        <Col>

        </Col>
        <Col>

        </Col>
      </Row>
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
