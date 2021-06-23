import React, { useEffect, useState } from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap'
import { fetchPeople } from "../services/Caller"
import PersonBox from '../components/boxes/PersonBox'

const People = () => {

  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setPeople(await fetchPeople())
    }
    fetchAPI()
  }, [])

  const trendingPeople = people.map((item, index) => {
    return (
      <Col className="text-center" key={index}>
        <PersonBox id={item.id} name={item.name} known={item.known} profileImg={item.profileImg}></PersonBox>
      </Col>
    )
  })

  return (
    <Container>
      <Row className="pt-3">
        <Col>
          <p className="fs-3">
            TRENDING PEOPLE
          </p>
        </Col>
      </Row>
      <Row>
        {trendingPeople}
      </Row>
    </Container>


  )
}

export default People
