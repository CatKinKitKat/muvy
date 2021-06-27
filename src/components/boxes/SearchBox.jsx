import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const SearchBox = (props) => {
  const nameHandle = (title) => {
    if (title.length >= 25) {
      return title.substring(0, 25) + '...'
    }
    return title
  }

  const pleaseKillMe = (type) => {
    if (type === 'tv') {
      return 'serie'
    }
    return type
  }

  const link = '/' + pleaseKillMe(props.type) + '/' + props.id.toString()

  const buttonByType = (type) => {
    if (type === 'movie' || type === 'serie') {
      return (
        < Button variant="outline" href={link} >
          <p className="fs-5 text-primary p-0">{nameHandle(props.title)} ({props.year})</p>
          <p className="fs-6 text-muted p-0">Classification: <strong className="fs-5 text-danger">{props.rating}</strong>
          </p>
        </Button >
      )
    } else if (type === 'person') {
      return (
        <Button variant="outline" href={link}>
          <p className="fs-5 text-primary p-0">{nameHandle(props.title)}</p>
        </Button >
      )
    }
  }

  return (
    <>
      <Link to={link}>
        <Image
          variant="fluid"
          className="mx-auto d-block py-1"
          src={props.imgUrl}
          style={{
            maxHeight: '100%', maxWidth: '15vw'
          }} />
      </Link>
      <div>
        {buttonByType(pleaseKillMe(props.type))}
      </div>
    </>
  )
}

SearchBox.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string,
  imgUrl: PropTypes.string,
  rating: PropTypes.number,
  type: PropTypes.string
}

export default SearchBox
