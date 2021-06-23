import React from 'react'
import { Container, Card, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'

const LoginBox = () => {
  return (
    <Container className="mt-5 text-center">
      <Card className="w-auto text-start p-5">
        <Form>
          <Form.Group controlId="formBasicEmail" className="pb-5">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="pb-1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox" className="pb-5">
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
