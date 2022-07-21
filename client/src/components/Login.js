import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function Login() {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    
  }

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      <Form onSubmit= {handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label> Enter Your Id</Form.Label>
          <Form.Control type="text" className="mb-3" ref={idRef} required />
        </Form.Group>
        <Button type="submit">Login</Button>
        <Button variant="secondary" className="ms-2">Create A New Id</Button>
      </Form>
    </Container>
  )
}
