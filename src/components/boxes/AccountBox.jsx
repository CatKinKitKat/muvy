import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import FavouriteItemBoxRow from "../FavouriteItemBoxRow";
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import {
  fetchFavouriteMovies,
  fetchFavouriteSeries,
  fetchWatchListMovies,
  fetchWatchListSeries
} from '../../services/Caller'

const AccountBox = (props) => {

  const [favouriteMovies, setFavouriteMovies] = useState([])
  const [favouriteSeries, setFavouriteSeries] = useState([])
  const [watchListMovies, setWatchListMovies] = useState([])
  const [watchListSeries, setWatchListSeries] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFavouriteMovies(await fetchFavouriteMovies(props.id))
      setFavouriteSeries(await fetchFavouriteSeries(props.id))
      setWatchListMovies(await fetchWatchListMovies(props.id))
      setWatchListSeries(await fetchWatchListSeries(props.id))
    }
    fetchAPI()
  }, [])



  const imgLink = (hash) => {
    return 'https://www.gravatar.com/avatar/' + hash
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
    <Container fluid className="p-0 m-0" style={{overflowY: "hidden"}}>
      <Col className="bg-dark">
        <Row className="p-5 pb-0">
          <Col>
            <Image src={imgLink('')} style={{ aspectRatio: '1/1', width: '12.5rem' }} roundedCircle />
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
          <p className="text-white px-4">Mature Content is {matureIndicator(props.adult)}.</p>
        </Row>
        <Row className="bg-light">
          <h4>Favourite Movies: </h4>
          <FavouriteItemBoxRow list={favouriteMovies.slice(0, 10)} type="movie" list_type="favourites"></FavouriteItemBoxRow>
        </Row>
        <Row className="bg-light">
          <h4>Favourite Series: </h4>
          <FavouriteItemBoxRow list={favouriteSeries.slice(0, 10)} type="serie" list_type="favourites"></FavouriteItemBoxRow>
        </Row>
        <Row className="bg-light">
          <h4>Movies in Watchlist: </h4>
          <FavouriteItemBoxRow list={watchListMovies.slice(0, 10)} type="movie" list_type="watchlist"></FavouriteItemBoxRow>
        </Row>
        <Row className="bg-light">
          <h4>Series in Watchlist: </h4>
          <FavouriteItemBoxRow list={watchListSeries.slice(0, 10)} type="serie" list_type="watchlist"></FavouriteItemBoxRow>
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
  adult: PropTypes.bool
}

export default AccountBox
