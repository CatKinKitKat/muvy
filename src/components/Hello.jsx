import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const Hello = () => {
  return (
    <Jumbotron className="pt-5">
      <h1>Welcome to muvy</h1>
      <p>
        This is a simple website with a simple purpose: to present you with the tools to
        find and debate your favourite movies, series and entertainers.
        <br/>
        Click on the button bellow to learn about a random movie.
      </p>
      <Button variant="primary">Give me Movie!</Button>
    </Jumbotron>
  )
}

export default Hello
