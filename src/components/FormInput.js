import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { question } from '../data'

function FormInput( {onAdd} ) {

  const [qu, setQu] = useState('')
  const [an, setAn] = useState('')

  const addNewItem = () => {
    question.push({id: Math.random(), q: qu, a: an});
    setQu('') //this clear the question input box after submitting 'Add'
    setAn('')//this clear the answer input box after submitting 'Add' 
    onAdd();
  }

  return (
    <Row className='my-2'>
      <Col sm='5'>
        <Form.Control value={qu} onChange={(e) => setQu(e.target.value)} type="text" placeholder="Enter Question" />
      </Col>

      <Col sm='5'>
        <Form.Control value={an} onChange={(e) => setAn(e.target.value)} type="text" placeholder="Enter Answer" />
      </Col>

      <Col sm='2'>
        <button onClick={addNewItem} variant="primary" type="submit" className='btn-color'> Add </button>
      </Col>
    </Row>
  )
}

export default FormInput