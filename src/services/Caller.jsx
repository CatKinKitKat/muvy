import axios from 'axios'

const apiKey = 'a376a8713895b520ccb34e514f0fbe51'

const url = 'https://api.themoviedb.org/3' // API URL

const requestTokenUrl = `${url}/authentication/token/new` // GET
const loginUrl = `${url}/authentication/token/validate_with_login` // POST
const sessionUrl = `${url}/authentication/session/new`// POST
const deleteSessionUrl = `${url}/authentication/session`// DELETE
const accountUrl = `${url}/account` // GET
const peopleUrl = `${url}/person` // GET
const movieUrl = `${url}/movie` // GET
const serieUrl = `${url}/tv` // GET
const castUrl = '/credits' // GET
const similarUrl = '/similar' // GET
const searchUrl = '/search/multi' // GET
const trendingPeopleUrl = `${url}/trending/person/week` // GET
const trendingMoviesUrl = `${url}/trending/movie/week` // GET
const trendingSeriesUrl = `${url}/trending/tv/week` // GET
// const moviesGenresUrl = `${url}/genre/movie/list` // GET
// const serieGenresUrl = `${url}/genre/tv/list` // GET

export const getAccId = async () => {
  try {
    const data = await getAccountDetails()
    return data.id
  } catch (_error) {
    return null
  }
}

export const rate = async (value, type, id) => {
  let data = []
  const urlBuilder = url + '/' + type + '/' + id + '/rating'

  await axios.post(urlBuilder, {
    value: value
  }, {
    params: {
      api_key: apiKey,
      session_id: localStorage.getItem('session_id')
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return false
  })

  return data.success
}

export const addToFavourites = async (type, id) => {
  let data = []
  const urlBuilder = accountUrl + '/' + await getAccId() + '/favorite'

  await axios.post(urlBuilder, {
    media_type: type,
    media_id: id,
    favorite: true
  }, {
    params: {
      api_key: apiKey,
      session_id: localStorage.getItem('session_id')
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return false
  })

  return data.success
}

export const removeFromFavourites = async (type, id) => {
  let data = []
  const urlBuilder = accountUrl + '/' + await getAccId() + '/favorite'

  const fuckOff = (yeet) => { // Dear god I am tired
    if (yeet === 'serie') {
      return 'tv'
    }
    return yeet
  }

  await axios.post(urlBuilder, {
    media_type: fuckOff(type),
    media_id: id,
    favorite: false
  }, {
    params: {
      api_key: apiKey,
      session_id: localStorage.getItem('session_id')
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return false
  })

  return data.success
}

export const addToWatchList = async (type, id) => {
  let data = []
  const urlBuilder = accountUrl + '/' + await getAccId() + '/watchlist'

  await axios.post(urlBuilder, {
    media_type: type,
    media_id: id,
    watchlist: true
  }, {
    params: {
      api_key: apiKey,
      session_id: localStorage.getItem('session_id')
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return false
  })

  return data.success
}

export const removeFromWatchList = async (type, id) => {
  let data = []
  const urlBuilder = accountUrl + '/' + await getAccId() + '/watchlist'

  await axios.post(urlBuilder, {
    media_type: type,
    media_id: id,
    watchlist: false
  }, {
    params: {
      api_key: apiKey,
      session_id: localStorage.getItem('session_id')
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return false
  })

  return data.success
}

export const fetchFavouriteMovies = async (id) => {
  let data = []
  const posterUrl = 'https://image.tmdb.org/t/p/w500/'
  const urlBuilder = accountUrl + '/' + id + '/favorite/movies'

  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey,
      session_id: localStorage.getItem('session_id')
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })

  const getYear = (date) => {
    if (date === null || date === undefined) {
      return '2021'
    }
    return date.substring(0, 4)
  }

  if (data.results === undefined) return []
  const modifiedData = data.results.map((m) => ({
    id: m.id,
    year: getYear(m.release_date),
    backPoster: posterUrl + m.backdrop_path,
    popularity: m.popularity,
    title: m.title,
    poster: posterUrl + m.poster_path,
    overview: m.overview,
    rating: m.vote_average
  }))

  return modifiedData
}

export const fetchFavouriteSeries = async (id) => {
  let data = []
  const posterUrl = 'https://image.tmdb.org/t/p/w500/'
  const urlBuilder = accountUrl + '/' + id + '/favorite/tv'

  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey,
      session_id: localStorage.getItem('session_id')
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })

  const getYear = (date) => {
    if (date === null || date === undefined) {
      return '2021'
    }
    return date.substring(0, 4)
  }

  if (data.results === undefined) return []
  const modifiedData = data.results.map((m) => ({
    id: m.id,
    year: getYear(m.first_air_date),
    backPoster: posterUrl + m.backdrop_path,
    popularity: m.popularity,
    title: m.name,
    poster: posterUrl + m.poster_path,
    overview: m.overview,
    rating: m.vote_average
  }))

  return modifiedData
}

export const fetchWatchListMovies = async (id) => {
  let data = []
  const posterUrl = 'https://image.tmdb.org/t/p/w500/'
  const urlBuilder = accountUrl + '/' + id + '/watchlist/movies'

  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey,
      session_id: localStorage.getItem('session_id')
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })

  const getYear = (date) => {
    if (date === null || date === undefined) {
      return '2021'
    }
    return date.substring(0, 4)
  }

  if (data.results === undefined) return []
  const modifiedData = data.results.map((m) => ({
    id: m.id,
    year: getYear(m.release_date),
    backPoster: posterUrl + m.backdrop_path,
    popularity: m.popularity,
    title: m.title,
    poster: posterUrl + m.poster_path,
    overview: m.overview,
    rating: m.vote_average
  }))

  return modifiedData
}

export const fetchWatchListSeries = async (id) => {
  let data = []
  const posterUrl = 'https://image.tmdb.org/t/p/w500/'
  const urlBuilder = accountUrl + '/' + id + '/watchlist/tv'

  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey,
      session_id: localStorage.getItem('session_id')
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })

  const getYear = (date) => {
    if (date === null || date === undefined) {
      return '2021'
    }
    return date.substring(0, 4)
  }

  if (data.results === undefined) return []
  const modifiedData = data.results.map((m) => ({
    id: m.id,
    year: getYear(m.first_air_date),
    backPoster: posterUrl + m.backdrop_path,
    popularity: m.popularity,
    title: m.name,
    poster: posterUrl + m.poster_path,
    overview: m.overview,
    rating: m.vote_average
  }))

  return modifiedData
}

export const getSessionId = () => {
  return localStorage.getItem('session_id')
}

export const getAccountDetails = async () => {
  let data = []

  await axios.get(accountUrl, {
    params: {
      api_key: apiKey,
      session_id: localStorage.getItem('session_id')
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })

  return data
}

const getToken = async () => {
  await axios.get(requestTokenUrl, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    localStorage.setItem('request_token', response.data.request_token)
    localStorage.setItem('token_validated', false)
  }).catch(error => {
    console.log('Error getting primitive token')
    console.log(error)
    localStorage.removeItem('request_token')
    localStorage.removeItem('token_validated')
  })
}

const validateToken = async (username, password) => {
  let data = []
  await getToken()
  await axios.post(loginUrl, {
    username: username,
    password: password,
    request_token: localStorage.getItem('request_token')
  }, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    localStorage.setItem('token_validated', true)
    data = response.data
  }).catch(error => {
    console.log('Error getting validation for token')
    console.log(error)
    localStorage.removeItem('request_token')
    localStorage.removeItem('token_validated')
  })

  return data.success
}

export const login = async (username, password) => {
  let data = []
  const bool = await validateToken(username, password)

  if (bool === 'false') {
    localStorage.removeItem('session_id')
    localStorage.removeItem('request_token')
    localStorage.removeItem('token_validated')
    return false
  }

  await axios.post(sessionUrl, {
    request_token: localStorage.getItem('request_token')
  }, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    localStorage.setItem('session_id', response.data.session_id)
    console.log('session. ' + localStorage.getItem('session_id') + '\ntoken used. ' +
      localStorage.getItem('request_token') + ' validated? ' + localStorage.getItem('token_validated'))
    data = response.data
  }).catch(error => {
    console.log('Error logging in')
    console.log(error)
    localStorage.removeItem('session_id')
    localStorage.removeItem('request_token')
    localStorage.removeItem('token_validated')
    return false
  })

  return data.success
}

export const logout = async () => {
  await axios.delete(deleteSessionUrl, {
    session_id: localStorage.getItem('session_id')
  }, {
    params: {
      api_key: apiKey
    }
  }).then(_response => {
    localStorage.removeItem('session_id')
    localStorage.removeItem('request_token')
    localStorage.removeItem('token_validated')
  }).catch(error => {
    console.log('Error logging out')
    console.log(error)
    localStorage.removeItem('session_id')
    localStorage.removeItem('request_token')
    localStorage.removeItem('token_validated')
  })
}

export const fetchSearch = async (searchValue, page) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500/'
  let data = []
  const finalUrl = url + searchUrl

  if (page === '') {
    page = 1
  }

  const getYear = (date) => {
    if (date === null || date === undefined) {
      return '2021'
    }
    return date.substring(0, 4)
  }
  await axios.get(finalUrl, {
    params: {
      api_key: apiKey,
      language: 'en_GB',
      query: searchValue,
      page: page
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })

  const inconsistency = (title, name) => {
    if (title === null || title === undefined) {
      return name
    } else if (name === null || name === undefined) {
      return title
    }
    return title
  }
  const modifiedData = data.results.map((m) => ({
    id: m.id,
    type: m.media_type,
    year: getYear(m.release_date),
    popularity: m.popularity,
    title: inconsistency(m.title, m.name),
    poster: posterUrl + inconsistency(m.poster_path, m.profile_path),
    rating: m.vote_average
  }))

  return modifiedData
}

export const fetchMovies = async (type, page) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500/'
  let data = []
  let urlBuilder = ''

  if (type === 'trending') {
    urlBuilder = trendingMoviesUrl
  } else {
    urlBuilder = movieUrl + '/' + type
  }

  if (page === '') {
    page = 1
  }

  const getYear = (date) => {
    if (date === null || date === undefined) {
      return '2021'
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
  }).catch(_error => {
    return data
  })
  const modifiedData = data.results.map((m) => ({
    id: m.id,
    year: getYear(m.release_date),
    backPoster: posterUrl + m.backdrop_path,
    popularity: m.popularity,
    title: m.title,
    poster: posterUrl + m.poster_path,
    overview: m.overview,
    rating: m.vote_average
  }))

  return modifiedData
}

export const fetchGenre = () => {

}

export const fetchMovieByGenre = async () => {

}

export const fetchPerson = async (id) => {
  let data = []
  const imgUrl = 'https://image.tmdb.org/t/p/w500/'
  const urlBuilder = peopleUrl + '/' + id

  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey,
      language: 'en_GB'
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })

  const gender = (gender) => {
    switch (gender) {
      case 0:
        return '0'
      case 1:
        return '1'
      case 2:
        return '2'
      case 3:
        return '3'
      default:
        return 'Invalid'
    }
  }

  const overviewHandle = (overview) => {
    if (overview.length >= 1500) {
      return overview.substring(0, 1500) + '...'
    }
    return overview
  }

  const modifiedData = [data].map((m) => ({
    id: m.id,
    birth: m.birthday,
    death: m.deathday,
    popularity: m.popularity,
    name: m.name,
    picture: imgUrl + m.profile_path,
    bio: overviewHandle(m.biography),
    adult: m.adult,
    gender: gender(m.gender)
  }))

  return modifiedData[0]
}

export const fetchPersonCredits = async (id) => {
  let data = []

  const posterUrl = 'https://image.tmdb.org/t/p/w500/'
  const urlBuilder = peopleUrl + '/' + id + '/combined_credits'

  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey,
      language: 'en_GB'
    }
  }).then(response => {
    data = response.data.cast
  }).catch(_error => {
    return data
  })

  const title = (title, name) => {
    if (title !== null || title !== undefined) {
      return title
    } else if (name !== null || name !== undefined) {
      return name
    }
  }
  const modifiedData = data.map((m) => ({
    id: m.id,
    type: m.media_type,
    character: m.character,
    title: title(m.title, m.name),
    poster: posterUrl + m.poster_path,
    rating: m.vote_average
  }))

  return modifiedData
}

export const fetchPeople = async (type, page) => {
  let data = []
  let urlBuilder = ''

  if (type === 'trending') {
    urlBuilder = trendingPeopleUrl
  } else {
    urlBuilder = peopleUrl + '/' + type
  }

  if (page === '') {
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
  }).catch(_error => {
    return data
  })
  const modifiedData = data.results.map((p) => ({
    id: p.id,
    popularity: p.popularity,
    name: p.name,
    profileImg: 'https://image.tmdb.org/t/p/w500' + p.profile_path,
    known: p.known_for_department
  }))

  return modifiedData
}

export const fetchSerieDetail = async (id) => {
  let data = []

  await axios.get(`${serieUrl}/${id}`, {
    params: {
      api_key: apiKey,
      language: 'en_GB'
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })

  return data
}

export const fetchSeries = async (type, page) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500/'
  let data = []
  let urlBuilder = ''

  if (type === 'trending') {
    urlBuilder = trendingSeriesUrl
  } else {
    urlBuilder = serieUrl + '/' + type
  }

  if (page === '') {
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
  }).catch(_error => {
    return data
  })

  const getYear = (date) => {
    if (date === null || date === undefined) {
      return '2021'
    }
    return date.substring(0, 4)
  }
  const modifiedData = data.results.map((m) => ({
    id: m.id,
    year: getYear(m.first_air_date),
    backPoster: posterUrl + m.backdrop_path,
    popularity: m.popularity,
    title: m.name,
    poster: posterUrl + m.poster_path,
    overview: m.overview,
    rating: m.vote_average
  }))

  return modifiedData
}

export const fetchMovieDetail = async (id) => {
  let data = []

  await axios.get(`${movieUrl}/${id}`, {
    params: {
      api_key: apiKey,
      language: 'en_GB'
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })

  return data
}

export const fetchMovieVideos = async (id) => {
  let data = []
  await axios.get(`${movieUrl}/${id}/videos`, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })
  const modifiedData = data.results.map((m) => ({
    type: m.type,
    key: m.key
  }))

  return modifiedData
}

export const fetchSerieVideos = async (id) => {
  let data = []
  await axios.get(`${serieUrl}/${id}/videos`, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })
  const modifiedData = data.results.map((m) => ({
    type: m.type,
    key: m.key
  }))

  return modifiedData
}

export const fetchMovieCasts = async (id) => {
  const urlBuilder = movieUrl + '/' + id + castUrl
  let data = []
  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })
  const modifiedData = data.cast.map((c) => ({
    id: c.id,
    character: c.character,
    name: c.name,
    img: 'https://image.tmdb.org/t/p/w500' + c.profile_path
  }))

  return modifiedData
}

export const fetchSerieCasts = async (id) => {
  const urlBuilder = serieUrl + '/' + id + castUrl
  let data = []
  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })
  const modifiedData = data.cast.map((c) => ({
    id: c.id,
    character: c.character,
    name: c.name,
    img: 'https://image.tmdb.org/t/p/w200' + c.profile_path
  }))

  return modifiedData
}

export const fetchSimilarMovie = async (id) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500/'
  const urlBuilder = movieUrl + '/' + id + similarUrl

  let data = []
  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey,
      language: 'en_GB'
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })
  const modifiedData = data.results.map((m) => ({
    id: m.id,
    backPoster: posterUrl + m.backdrop_path,
    popularity: m.popularity,
    title: m.title,
    poster: posterUrl + m.poster_path,
    overview: m.overview,
    rating: m.vote_average
  }))

  return modifiedData
}

export const fetchSimilarSerie = async (id) => {
  const posterUrl = 'https://image.tmdb.org/t/p/w500/'
  const urlBuilder = serieUrl + '/' + id + similarUrl

  let data = []
  await axios.get(urlBuilder, {
    params: {
      api_key: apiKey,
      language: 'en_GB'
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })
  const modifiedData = data.results.map((m) => ({
    id: m.id,
    backPoster: posterUrl + m.backdrop_path,
    popularity: m.popularity,
    title: m.name,
    poster: posterUrl + m.poster_path,
    overview: m.overview,
    rating: m.vote_average
  }))

  return modifiedData
}

export const fetchTrailer = async (id) => {
  let data = []
  await axios.get(`${movieUrl}/${id}/videos`, {
    params: {
      api_key: apiKey
    }
  }).then(response => {
    data = response.data
  }).catch(_error => {
    return data
  })

  if (data.length === 0) {
    return []
  }
  const modifiedData = data.results.map((m) => ({
    type: m.type,
    key: m.key
  }))

  for (const video of modifiedData) {
    if (video.type === 'Trailer') {
      return (video.key).toString()
    }
  }

  return []
}
