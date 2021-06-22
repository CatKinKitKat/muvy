import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import Box from './boxes/Box'

const BoxRow = (props) => {
  const list = props.list.map((item, index) => {
    return (
      <Col className="d-flex align-items-stretch" key={index}>
        <Box title={item.title} year={item.year} imgUrl={item.poster} id={item.id}/>
      </Col>
    )
  })

  return (
    <Container className="pt-5">
      <Row>
        {list}
      </Row>
    </Container>
  )
}

BoxRow.propTypes = {
  list: PropTypes.array
}


export default BoxRow
