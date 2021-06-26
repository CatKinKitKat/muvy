import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const Hello = () => {
  const randy = () => {
    return Math.floor(Math.random() * (999999 - 1) + 1)
  }

  const link = '/movie/' + randy()

  return (
    <Jumbotron className="pt-3">
      <h1>Welcome to muvy</h1>
      <p>
        This is a simple website with a simple purpose: to present you with the tools to
        find and debate your favourite movies, series and entertainers.
        <br/>
        Click on the button bellow to learn about a random movie.
      </p>
      <Button variant="primary" href={link}>Give me Movie!</Button>
    </Jumbotron>
  )
}

export default Hello
