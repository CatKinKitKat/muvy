import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Image, Col, Row } from 'react-bootstrap'
import ChatBox from './boxes/ChatBox'
import { fetchMovieDetail, fetchSerieDetail } from '../services/Caller'

const DiscussionDetail = () => {

  return (
    <>
      <ChatBox></ChatBox>
    </>
  )
}

export default DiscussionDetail
