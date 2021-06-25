import axios from 'axios'

const apiKey = 'a376a8713895b520ccb34e514f0fbe51'

const url = 'https://api.themoviedb.org/3' // API URL

const requestTokenUrl = `${url}/authentication/token/new` // GET
const loginUrl = `${url}/authentication/token/validate_with_login` // POST
const sessionUrl = `${url}/authentication/session/new`// POST
const deleteSessionUrl = `${url}/authentication/session`// DELETE
const peopleUrl = `${url}/person` // GET
const movieUrl = `${url}/movie` // GET
const serieUrl = `${url}/tv` // GET
const trendingPeopleUrl = `${url}/trending/person/week` // GET
const trendingMoviesUrl = `${url}/trending/movie/week` // GET
const trendingSeriesUrl = `${url}/trending/tv/week` // GET
const moviesGenresUrl = `${url}/genre/movie/list` // GET
const serieGenresUrl = `${url}/genre/tv/list` // GET

const getToken = async () => {

  await axios.get(requestTokenUrl, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    sessionStorage.setItem("request_token", response.data.request_token)
    sessionStorage.setItem("token_validated", false)
  }).catch(error => {
    console.log("Error getting primitive token")
    console.log(error)
    sessionStorage.removeItem("request_token")
    sessionStorage.removeItem("token_validated")
  })
}

const validateToken = async (username, password) => {

  await getToken()
  await axios.post(loginUrl, {
    username: username,
    password: password,
    request_token: sessionStorage.getItem('request_token')
  }, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    sessionStorage.setItem("token_validated", true)
  }).catch(error => {
    console.log("Error getting validation for token")
    console.log(error)
    sessionStorage.removeItem("request_token")
    sessionStorage.removeItem("token_validated")
  })
}

export const login = async (username, password) => {

  await validateToken(username, password)
  await axios.post(sessionUrl, {
    request_token: sessionStorage.getItem('request_token')
  }, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    sessionStorage.setItem("session_id", response.data.session_id)
    console.log("session. " + sessionStorage.getItem('session_id') + "\ntoken used. "
      + sessionStorage.getItem('request_token') + " validated? " + sessionStorage.getItem('token_validated'))
    return true
  }).catch(error => {
    console.log("Error logging in")
    console.log(error)
    sessionStorage.removeItem("session_id")
    sessionStorage.removeItem("request_token")
    sessionStorage.removeItem("token_validated")
    return false
  })
}


export const logout = async () => {

  await axios.delete(deleteSessionUrl, {
    session_id: sessionStorage.getItem('session_id')
  }, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    sessionStorage.removeItem("session_id")
    sessionStorage.removeItem("request_token")
    sessionStorage.removeItem("token_validated")
  }).catch(error => {
    console.log("Error logging out")
    console.log(error)
    sessionStorage.removeItem("session_id")
    sessionStorage.removeItem("request_token")
    sessionStorage.removeItem("token_validated")
  })
}

export const fetchMovies = async (type, page) => {

  const posterUrl = 'https://image.tmdb.org/t/p/w500/'
  var data = []
  var urlBuilder = ""

  if (type === "trending") {
    urlBuilder = trendingMoviesUrl
  } else {
    urlBuilder = movieUrl + "/" + type
  }

  if (page == "") {
    page = 1
  }

  const getYear = (date) => {

    if (date === null || date === undefined) {
      return "2021"
    }
    return date.substring(0, 4)
  }
  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey,
      language: 'en_GB',
      page: page
    }
  }).then(response => {
    data = response.data
  }).catch(error => {
    return data
  })
  const modifiedData = data['results'].map((m) => ({
    id: m['id'],
    year: getYear(m['release_date']),
    backPoster: posterUrl + m['backdrop_path'],
    popularity: m['popularity'],
    title: m['title'],
    poster: posterUrl + m['poster_path'],
    overview: m['overview'],
    rating: m['vote_average'],
  }))

  return modifiedData
}

export const fetchGenre = () => {

}

export const fetchMovieByGenre = async () => {

}


export const fetchPeople = async (type, page) => {

  var data = []
  var urlBuilder = ""

  if (type === "trending") {
    urlBuilder = trendingPeopleUrl
  } else {
    urlBuilder = peopleUrl + "/" + type
  }
  
  if (page == "") {
    page = 1
  }

  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey,
      language: 'en_GB',
      page: page
    }
  }).then(response => {
    data = response.data
  }).catch(error => {
    return data
  })
  const modifiedData = data['results'].map((p) => ({
    id: p['id'],
    popularity: p['popularity'],
    name: p['name'],
    profileImg: 'https://image.tmdb.org/t/p/w500' + p['profile_path'],
    known: p['known_for_department']
  }))

  return modifiedData
}

export const fetchSeries = async (type, page) => {

  const posterUrl = 'https://image.tmdb.org/t/p/w500/'
  var data = []
  var urlBuilder = ""

  if (type === "trending") {
    urlBuilder = trendingSeriesUrl
  } else {
    urlBuilder = serieUrl + "/" + type
  }
  
  if (page == "") {
    page = 1
  }

  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey,
      language: 'en_GB',
      page: page
    }
  }).then(response => {
    data = response.data
  }).catch(error => {
    return data
  })
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

  return modifiedData
}

export const fetchMovieDetail = () => {

}

export const fetchMovieVideos = async (id) => {

  var data = []
  await axios.get(`${movieUrl}/${id}/videos`, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    data = response.data
  }).catch(error => {
    return data
  })
  const modifiedData = data['results'].map((m) => ({
    type: m['type'],
    key: m['key']
  }))

  return modifiedData
}

export const fetchCasts = () => {

}

export const fetchSimilarMovie = () => {

}

export const fetchTrailer = async (id) => {

  var data = []
  await axios.get(`${movieUrl}/${id}/videos`, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    data = response.data
  }).catch(error => {
    return data
  })
  const modifiedData = data['results'].map((m) => ({
    type: m['type'],
    key: m['key']
  }))

  for (var video of modifiedData) {
    if (video.type === "Trailer") {
      return (video.key).toString()
    }
  }

}

