import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Image, Button, Container, CardDeck, Col, Row } from 'react-bootstrap'
import { fetchPerson, fetchPersonCredits } from '../services/Caller'
import CreditBox from './boxes/CreditBox'

const PersonDetail = () => {

  const [detail, setDetail] = useState([])
  const [credits, setCredits] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchPerson(id))
      setCredits(await fetchPersonCredits(id))
    }
    fetchAPI()
  }, [])

  const getLife = (birth, death) => {
    if (birth !== null && death === null) {
      return (
        <strong className="text-muted fs-5">(Born: {birth})</strong>
      )
    } else if (birth !== null && death !== null) {
      return (
        <strong className="text-muted fs-5">(Lived: {birth} - {death})</strong>
      )
    } else if (birth === null && death !== null) {
      return (
        <strong className="text-muted fs-5">(Died: {death})</strong>
      )
    }
    return ''
  }

  const list = credits.slice(0,30).map((item, index) => {
    return (
      <Container className="d-flex p-0 pe-3 pb-1" key={index}>
        <CreditBox title={item.title} character={item.character} imgUrl={item.poster} id={item.id} type={item.type}/>
      </Container>
    )
  })


  return (
    <>
      <Col style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea)',
        backgroundSize: 'cover',
        height: '100vh'
      }}>
        <Row className="p-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: 'inherit' }}>
          <Col className="d-inline-flex">
            <Image src={detail.picture}
              style={{ height: '80vh', aspectRatio: '10/16' }} rounded />
          </Col>
          <Col className="text-lg-end">
            <Row>
              <h1>{detail.name}</h1>
              <p>{getLife(detail.birth, detail.death)}</p>
            </Row>
            <Row className="d-md-flex collapse">
              <h4>Biography: </h4>
              <p>{detail.bio}</p>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row className="p-5" >
          <h1>Known for: </h1>
          <CardDeck className="d-inline-flex justify-content-start" style={{overflowY: "scroll"}}>
            {list}
          </CardDeck>
        </Row>
      </Col>
    </>
  )
}

export default PersonDetail
