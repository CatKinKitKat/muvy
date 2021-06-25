import { React, useEffect, useState } from 'react'
import { Dropdown, Container, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import SerieBox from '../components/boxes/SerieBox'
import { fetchSeries } from '../services/Caller'

const Series = () => {

  const [series, setSeries] = useState([])
  var [title, setTitle] = useState([])
  const { sort_type } = useParams()

  useEffect(() => {
    const fetchAPI = async () => {
      setTitle(sort_type.toUpperCase().replace(/_/g," ") + " SERIES")
      
      console.log(await fetchSeries(sort_type, 1))
      
      setSeries(await fetchSeries(sort_type, 1))
    }
    fetchAPI()
  }, [])

  const seriesList = series.map((item, index) => {
    return (
      <Col className="text-center" key={index}>
        <SerieBox id={item.id} title={item.title} year={item.year} rating={item.rating} imgUrl={item.poster}></SerieBox>
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
              <Dropdown.Item href="/series/top_rated">TOP RATED</Dropdown.Item>
              <Dropdown.Item href="/series/on_the_air">ON THE AIR</Dropdown.Item>
              <Dropdown.Item href="/series/popular">POPULAR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        {seriesList}
      </Row>
    </Container>
  )
}

export default Series
