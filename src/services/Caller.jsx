import axios from 'axios'

const apiKey = 'a376a8713895b520ccb34e514f0fbe51'

const url = 'https://api.themoviedb.org/3'

const requestTokenUrl = `${url}/authentication/token/new`
const loginUrl = `${url}/authentication/token/validate_with_login`
const sessionUrl = `${url}//authentication/session/new`
const nowPlayingUrl = `${url}/movie/now_playing`
const movieUrl = `${url}/movie`
const moviesGenresUrl = `${url}/genre/movie/list`
const serieUrl = `${url}/tv`
const serieGenresUrl = `${url}/genre/tv/list`
const trendingPeopleUrl = `${url}/trending/person/week`

const getToken = async () => {

  try {

    const { data } = await axios.get(requestTokenUrl, {
      params: {
        api_key: apiKey
      }
    })

    sessionStorage.setItem("request_token", data['request_token'])
    sessionStorage.setItem("token_validated", false)
  } catch (error) {

    console.log("Error getting primitive token")
    console.log(error)

    sessionStorage.removeItem("request_token")
    sessionStorage.removeItem("token_validated")
  }

}

const validateToken = async (username, password) => {

  await getToken()

  try {

    await axios.get(loginUrl, {
      params: {
        api_key: apiKey,
        username: username,
        password: password,
        request_token: sessionStorage.getItem('request_token')
      }
    })

    sessionStorage.setItem("token_validated", true)

  } catch (error) {

    console.log("Error getting validation for token")
    console.log(error)

    sessionStorage.removeItem("request_token")
    sessionStorage.removeItem("token_validated")
  }
}

export const login = async (username, password) => {

  await validateToken(username, password)

  try {

    const { data } = await axios.get(sessionUrl, {
      params: {
        api_key: apiKey,
        request_token: sessionStorage.getItem('request_token')
      }
    })

    sessionStorage.setItem("session_id", data['session_id'])

    console.log("session. " + sessionStorage.getItem('session_id') + "\ntoken used. "
      + sessionStorage.getItem('request_token') + " validated? " + sessionStorage.getItem('token_validated'))

    return true
  } catch (error) {

    console.log("Error logging in")
    console.log(error)

    sessionStorage.removeItem("session_id")
    sessionStorage.removeItem("request_token")
    sessionStorage.removeItem("token_validated")
    return false
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

