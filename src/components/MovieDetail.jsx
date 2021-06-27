import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Image, Button, Container, Card, Col, Row } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'
import VideoModal from './VideoModal'
import CastBox from './boxes/CastBox'
import RecomendedMovieBox from './boxes/RecomendedMovieBox'
import ShareButton from './buttons/ShareButton'
import ChatButton from './buttons/ChatButton'
import FavouriteButton from './buttons/FavouriteButton'
import WatchListButton from './buttons/WatchListButton'
import {
  rate,
  fetchMovieDetail,
  fetchMovieCasts,
  fetchSimilarMovie
} from '../services/Caller'

const MovieDetail = () => {
  let genres = []
  let genresList = []
  const [detail, setDetail] = useState([])
  const [casts, setCasts] = useState([])
  const [similarMovie, setSimilarMovie] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(id))
      setCasts(await fetchMovieCasts(id))
      setSimilarMovie(await fetchSimilarMovie(id))
    }
    fetchAPI()
  }, [])

  const rateMovie = async (newRating) => {
    newRating *= 2
    if (await rate(newRating, "movie", id)) {
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

  const similarMovieList = similarMovie.slice(0, 8).map((item, index) => {
    return (
      <Col className="col-md-3 col-sm-6 d-flex justify-content-between" key={index}>
        <RecomendedMovieBox id={item.id} title={item.title} poster={item.poster} rating={item.rating} />
      </Col>
    )
  })

  const revenueParser = (revenue) => {
    if (revenue === null || revenue === undefined) {
      return 'Very High'
    }
    return revenue.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
  }

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
            <h1 >{detail.title} <strong className="text-muted fs-5 d-md-flex collapse">({detail.release_date})</strong></h1>
            <h4 className="d-md-flex collapse">Overview: </h4>
            <p className="d-md-flex collapse">{detail.overview}</p>
          </Col>
          <Col className="text-end">
            <h3>Rating: <strong className="fs-2 text-danger">{detail.vote_average}</strong></h3>

            <VideoModal id={id} title={detail.title} color="muted" />
          </Col>
          <Col className="text-end justify-content-right align-self-center">
            <div className="btn-group-vertical collapse d-md-inline">
              <ChatButton type="movie" id={id} />
              <ShareButton title={detail.title} />
              <FavouriteButton type="movie" id={id} />
              <WatchListButton type="movie" id={id} />
            </div>
          </Col>
          <Row className="py-2 text-start d-inline-block">
            <h5 className="p-4 collapse d-md-flex">
              Rate:
              <ReactStars
                count={5}
                onChange={rateMovie}
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
            <p>RELEASE DATE</p>
            <h2>{detail.release_date}</h2>
          </div>
          <div className="col-md-3">
            <p>RUN TIME</p>
            <h2>{detail.runtime} minutes</h2>
          </div>
          <div className="col-md-3">
            <p>REVENUE</p>
            <h2>{revenueParser(detail.revenue)}</h2>
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
          {similarMovieList}
        </Row>
      </Col>
    </>

  )
}

export default MovieDetail
