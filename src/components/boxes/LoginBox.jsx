import { React, useState } from 'react'
import { Container, Card, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { login } from '../../services/Caller'

const LoginBox = () => {
  const history = useHistory()
  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])

  const FormHandler = (event) => {
    event.preventDefault()
    if (login(username, password)) {
      alert('Login Successeful')
      history.push('/')
    } else {
      alert('Login Unsuccesseful')
      history.push('/login')
    }
  }

  const UsernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const PasswordHandler = (event) => {
    setPassword(event.target.value)
  }

  return (
    <Container className="mt-5 text-center">
      <Card className="w-auto text-start p-5">
        <Form onSubmit={FormHandler}>
          <Form.Group controlId="username" className="pb-5">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" onChange={UsernameHandler} />
          </Form.Group>
          <Form.Group controlId="password" className="pb-1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={PasswordHandler} />
          </Form.Group>
          <Form.Group controlId="persistance" className="pb-5">
            <Form.Check type="checkbox" label="Save Login" />
          </Form.Group>
          <div className="d-flex mb-3">
            <Button variant="primary" type="submit" className="me-auto">
              Log in
            </Button>
            <OverlayTrigger placement="left" overlay={
              <Tooltip className="px-2 m-1 text-warning">
                <strong>Warning: external link</strong>
              </Tooltip>
            }>
              <a href="https://www.themoviedb.org/signup" className="text-muted pt-3">
                No account? No problem, register here!
              </a>
            </OverlayTrigger>
          </div>
        </Form>
      </Card>
    </Container>
  )
}

export default LoginBox
