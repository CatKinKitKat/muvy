import { React, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { getAccountDetails } from '../../services/Caller'

const AccountBox = () => {

  const [details, setDetails] = useState([])
  const imgLink = (hash) => {
    return "https://www.gravatar.com/avatar/" + hash
  }

  useEffect(() => {
    const fetchAPI = async () => {
      setDetails(await getAccountDetails())
    }
    fetchAPI()
  }, [])


  return (
    <Container>
      <Row>
        <Col>
          <h1>{details.username}</h1>
          <Image src={imgLink()} rounded />
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
