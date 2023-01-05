import React from 'react'
import { Accordion, Row } from 'react-bootstrap'
import { question } from '../data'

function QAList({ data, deleteOneItem }) {
     const dataLocalStorage = JSON.parse(localStorage.getItem('items'))
     //to delete one item from array
     const onDeleteItem = (ID) => {
          if(localStorage.getItem('items') != 1) {
               //findIndex: use to find the index in the array
               const index = question.findIndex((item) => item.id === ID);
               question.splice(index, 1); // after finding the index that we selected to delete, we remove only that one. 
               //if we put question.splice(index, 2), it will remove the this selected item and the next one.
               deleteOneItem(question); // this is to send the delete function as a param to deleteOneItem in App.js
          }
     }

     //localStorage.getItem('items') != null ? (data.map((item, index) means if the local storage is not empty, execute the code in the return
     
  return (
    <Row>
     <Accordion>
     {
          localStorage.getItem('items') != null ? (dataLocalStorage.map((item, index) => {
               return (
                    <Accordion.Item key={index} eventKey={item.id}>
                         <Accordion.Header>
                              <div className='m-auto'>{item.q}</div>
                         </Accordion.Header>
                         
                         <Accordion.Body>
                              <div className='px-3 d-inline'>{item.a}</div>
                              <button onClick={() => onDeleteItem(item.id)} className='btn-color'>Delete</button>
                         </Accordion.Body>
                    </Accordion.Item>
               )
          })) : <h2 className='fs-4 text-center p-5'>No Questions for Now</h2>
     }
     </Accordion>
    </Row>
  )
}

export default QAList