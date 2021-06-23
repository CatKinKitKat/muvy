import axios from 'axios'

const apiKey = 'a376a8713895b520ccb34e514f0fbe51'
const url = 'https://api.themoviedb.org/3'
const nowPlayingUrl = `${url}/movie/now_playing`
const topRatedUrl = `${url}/movie/top_rated`
const movieUrl = `${url}/movie`
const genreUrl = `${url}/genre/movie/list`
const moviesUrl = `${url}/discover/movie`
const personUrl = `${url}/trending/person/week`

export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: 'en_GB',
        page: 1
      }
    })

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      year: m['release_date'].substring(0, 4),
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }))

    return modifiedData;
  } catch (error) { }
}

export const fetchGenre = () => {

}

export const fetchMovieByGenre = async () => {

}


export const fetchPersons = async () => {
  try {
    const { data } = await axios.get(personUrl, {
      params: {
        api_key: apiKey
      }
    })
    const modifiedData = data['results'].map((p) => ({
      id: p['id'],
      popularity: p['popularity'],
      name: p['name'],
      profileImg: 'https://image.tmdb.org/t/p/w200' + p['profile_path'],
      known: p['known_for_department']
    }))
    return modifiedData;
  } catch (error) { }
}

export const fetchTopRatedMovies = async () => {
  try {
    const { data } = await axios.get(topRatedUrl, {
      params: {
        api_key: apiKey,
        language: 'en_US',
        page: 1
      }
    })

    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m['id'],
      year: m['release_date'].substring(0, 4),
      backPoster: posterUrl + m['backdrop_path'],
      popularity: m['popularith'],
      title: m['title'],
      poster: posterUrl + m['poster_path'],
      overview: m['overview'],
      rating: m['vote_average'],
    }))

    return modifiedData;
  } catch (error) { }

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
} catch (error) { }
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
      if (video.type == "Trailer") {
        return (video.key).toString()
      }
    }
} catch (error) { }

}
