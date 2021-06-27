import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Image, Button, Container, Card, Col, Row } from 'react-bootstrap'
import { Star, Bookmark } from 'react-bootstrap-icons'
import ReactStars from 'react-rating-stars-component'
import VideoModal from './VideoModal'
import CastBox from './boxes/CastBox'
import RecomendedSerieBox from './boxes/RecomendedSerieBox'
import ShareButton from './buttons/ShareButton'
import ChatButton from './buttons/ChatButton'
import FavouriteButton from './buttons/FavouriteButton'
import WatchListButton from './buttons/WatchListButton'
import {
  rate,
  fetchSerieDetail,
  fetchSerieCasts,
  fetchSimilarSerie
} from '../services/Caller'

const SerieDetail = () => {
  let genres = []
  let genresList = []
  const [detail, setDetail] = useState([])
  const [casts, setCasts] = useState([])
  const [similarSerie, setSimilarSerie] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchSerieDetail(id))
      setCasts(await fetchSerieCasts(id))
      setSimilarSerie(await fetchSimilarSerie(id))
    }
    fetchAPI()
  }, [])

  const overviewHandle = (overview) => {
    if (overview.length >= 700) {
      return overview.substring(0, 700) + '...'
    }
    return overview
  }

  const rateSerie = async (newRating) => {
    newRating *= 2
    if (await rate(newRating, "tv", id)) {
      alert("Rated: " + newRating + "/10")
    }
  }

  genres = detail.genres

  if (genres) {
    genresList = genres.map((item, index) => {
      const color = () => {
        const items = ['danger', 'info', 'warning', 'success', 'primary', 'secondary']

        return items[Math.floor(Math.random() * items.length)]
      }

      return (
        <li className="collapse d-md-inline" key={index}>
          <Button variant="outline" className={'fs-2 text-' + color()}>
            {item.name}
          </Button>
        </li>
      )
    })
  }

  const castList = casts.slice(0, 4).map((item, index) => {
    return (
      <Col className="col-md-3 text-center" key={index}>
        <CastBox id={item.id} profileImg={item.img} name={item.name} character={item.character} />
      </Col>
    )
  })

  const similarSerieList = similarSerie.slice(0, 8).map((item, index) => {
    return (
      <Col className="col-md-3 col-sm-6 d-flex justify-content-between" key={index}>
        <RecomendedSerieBox id={item.id} title={item.title} poster={item.poster} rating={item.rating} />
      </Col>
    )
  })

  const posterGet = (poster) => {
    return 'https://image.tmdb.org/t/p/w500' + poster
  }

  return (

    <>
      <Col style={{
        backgroundImage: 'url(https://image.tmdb.org/t/p/original' + detail.backdrop_path + ')',
        backgroundSize: 'cover',
        height: '100vh'
      }}>
        <Row className="p-5 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', height: 'inherit' }}>
          <Col className="d-flex">
            <Image src={posterGet(detail.poster_path)}
              style={{ height: '60vh', aspectRatio: '10/16' }} rounded />
          </Col>
          <Col className="text-start">
            <h1>{detail.name} <strong className="text-muted fs-5">({detail.first_air_date})</strong></h1>
            <h4 className="d-lg-flex collapse">Overview: </h4>
            <p className="d-lg-flex collapse">{detail.overview}</p>
          </Col>
          <Col className="text-end">
            <h3 >Rating: <strong className="fs-2 text-danger">{detail.vote_average}</strong></h3>
            <VideoModal id={id} title={detail.title} color="muted" />
          </Col>
          <Col className="text-end justify-content-right align-self-center">
            <div className="btn-group-vertical collapse d-md-inline">
              <ChatButton type="serie" id={id}/>
              <ShareButton title={detail.name} />
              <FavouriteButton type="tv" id={id} />
              <WatchListButton type="tv" id={id} />
            </div>
          </Col>
          <Row className="py-2 text-start d-inline-block">
            <h5 className="p-4 collapse d-md-flex">
              Rate:
              <ReactStars
                count={5}
                onChange={rateSerie}
                isHalf={true}
                size={42}
              />
            </h5>
            <h3 className="px-4 collapse d-md-flex">Genres: </h3>
            {genresList}
          </Row>
        </Row>
      </Col>
      <Col className="p-5 text-center">
        <Row className="collapse d-lg-flex">
          <div className="col-md-3">
            <p>FISRT AIR DATE</p>
            <h2>{detail.first_air_date}</h2>
          </div>
          <div className="col-md-3">
            <p>RUN TIME</p>
            <h2>{detail.runtime} minutes</h2>
          </div>
          <div className="col-md-3">
            <p>NUMBER OF EPISODES</p>
            <h2>{detail.number_of_episodes}</h2>
          </div>
          <div className="col-md-3 px-0">
            <p>HOMEPAGE</p>
            <Link to={detail.homepage}>
              <h3>External Link</h3>
            </Link>
          </div>
        </Row>
        <Row>
          <h3 className="p-5">PRIMARY CAST</h3>
          {castList}
        </Row>
        <Row>
          <h4 className="p-5">SIMILAR MOVIES</h4>
          {similarSerieList}
        </Row>
      </Col>
    </>

  )
}

export default SerieDetail
