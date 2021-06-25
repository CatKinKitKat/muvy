import React, { useEffect, useState } from 'react'
import { Dropdown, Col, Row, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchPeople } from "../services/Caller"
import PersonBox from '../components/boxes/PersonBox'

const People = () => {

  const [people, setPeople] = useState([])
  var [title, setTitle] = useState([])
  const { sort_type } = useParams()

  useEffect(() => {
    const fetchAPI = async () => {
      setTitle(sort_type.toUpperCase().replace(/_/g, " ") + " PEOPLE")
      setPeople(await fetchPeople(sort_type, 1))
    }
    fetchAPI()
  }, [])

  const peopleList = people.map((item, index) => {
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
          <h1 className="pt-3">{title}</h1>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-basic" className="fs-4 text-secondary">
              SORT
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/people/trending">TRENDING</Dropdown.Item>
              <Dropdown.Item href="/people/popular">POPULAR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        {peopleList}
      </Row>
    </Container>
  )
}

export default People
