import axios from 'axios'

var session = ""

const apiKey = 'a376a8713895b520ccb34e514f0fbe51'
var request_token = "484babcdf9f0e0cc23b65ad722413b3200a087a7"

const url = 'https://api.themoviedb.org/3'

const requestTokenUrl = `${url}/authentication/token/new`
const loginUrl = `${url}/authentication/token/validate_with_login`
const nowPlayingUrl = `${url}/movie/now_playing`
const movieUrl = `${url}/movie`
const moviesGenresUrl = `${url}/genre/movie/list`
const serieUrl = `${url}/tv`
const serieGenresUrl = `${url}/genre/tv/list`
const trendingPeopleUrl = `${url}/trending/person/week`

export const checkLogin = async () => {

  if (session === "") {
    return false
  } else {
    return true
  }

}

export const getToken = async () => {

  if (request_token != "") {
    return request_token
  }

  try {
    const { data } = await axios.get(requestTokenUrl, {
      params: {
        api_key: apiKey
      }
    })
    const modifiedData = data['results'].map((m) => ({
      request_token: m['request_token'],
    }))

    request_token = modifiedData.request_token
    alert("DEV, Request Token Expired" + request_token)
    return request_token
  } catch (error) {
    request_token = ""
    return getToken()
  }
}

export const login = async (username, password) => {

  try {
    const { data } = await axios.get(loginUrl, {
      params: {
        api_key: apiKey,
        username: username,
        password: password,
        request_token: getToken()
      }
    })
    const modifiedData = data['results'].map((m) => ({
      request_token: m['request_token'],
    }))

    return modifiedData;
  } catch (error) {
    request_token = ""
    return "error"
  }
}

export const fetchMovies = async (type, page) => {

  const urlBuilder = movieUrl + "/" + type

  if (page == "") {
    page = 1
  }

  try {
    const { data } = await axios.get(urlBuilder, {
      params: {
        api_key: apiKey,
        language: 'en_GB',
        page: page
      }
    })

    const posterUrl = 'https://image.tmdb.org/t/p/w500/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      year: m['release_date'].substring(0, 4),
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularity'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }))

    return modifiedData;
  } catch (error) {
    const { data } = await axios.get(urlBuilder, {
      params: {
        api_key: apiKey,
        language: 'en_GB',
        page: page
      }
    })

    const posterUrl = 'https://image.tmdb.org/t/p/w500/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      year: "2021",
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularity'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }))

    return modifiedData;
  }
}

export const fetchGenre = () => {

}

export const fetchMovieByGenre = async () => {

}


export const fetchPeople = async () => {

  try {
    const { data } = await axios.get(trendingPeopleUrl, {
      params: {
        api_key: apiKey
      }
    })
    const modifiedData = data['results'].map((p) => ({
      id: p['id'],
      popularity: p['popularity'],
      name: p['name'],
      profileImg: 'https://image.tmdb.org/t/p/w500' + p['profile_path'],
      known: p['known_for_department']
    }))

    return modifiedData;
  } catch (error) {
    return []
  }
}

export const fetchSeries = async (type, page) => {

  const urlBuilder = serieUrl + "/" + type

  if (page == "") {
    page = 1
  }

  try {
    const { data } = await axios.get(urlBuilder, {
      params: {
        api_key: apiKey,
        language: 'en_GB',
        page: page
      }
    })

    const posterUrl = 'https://image.tmdb.org/t/p/w500/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      year: m['first_air_date'].substring(0, 4),
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularity'],
      title: m['name'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }))

    return modifiedData;
  } catch (error) {
    alert(error)
    return []
  }
}

export const fetchMovieDetail = () => {

}

export const fetchMovieVideos = async (id) => {

  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey
      }
    });
    const modifiedData = data['results'].map((m) => ({
      type: m['type'],
      key: m['key']
    }))

    return modifiedData
  } catch (error) {
    return []
  }
}

export const fetchCasts = () => {

}

export const fetchSimilarMovie = () => {

}

export const fetchTrailer = async (id) => {

  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey
      }
    });

    const modifiedData = data['results'].map((m) => ({
      type: m['type'],
      key: m['key']
    }))

    for (var video of modifiedData) {
      if (video.type === "Trailer") {
        return (video.key).toString()
      }
    }
  } catch (error) {
    return []
  }

}

