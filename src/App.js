import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { question } from "./data";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [data, setData] = useState(question)

  //To add new items
  const addItem = (onAdd) => {
    localStorage.setItem('items', JSON.stringify([...question])); //This to store and keep the data in the array even if we refresh the browser
    setData([...question])
    notify('Question Added Successfully', "Success")
  }
  //To delete all data items
  const deleteAllItems = () => {
    localStorage.removeItem('items')
    //splice: change in the original array based in the giving condition. in here, remove all items from index 0 to the end (all items) 
    question.splice(0, question.length);
    setData([])
    notify('Question Deleted Successfully', "Success")
  }

  //deleteOneItem is to delete one item in array
  //items: param is coming from QAList.js
  const deleteOneItem = (items) => {
    localStorage.setItem('items', JSON.stringify([...items])); //delete one item from the local storage
    setData([...items])
    if(items.length <= 0) {
      deleteAllItems();
    }

  }

    //to push notification
    const notify = (message, type) => {
      if(type === "Error"){
        toast.error(message)
      } else if(type === "Success") {
        toast.success(message)
      }
    };
  

  return (
    <div className="font text-canter color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm='4'>
            <div className="fs-3 text-center py-2">Questions and Answers</div>
          </Col>
          <Col sm='8'>
            <FormInput onAdd={addItem} notify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {
              localStorage.getItem('items') != null ? (<button onClick={deleteAllItems} className="btn-color w-100 my-3">Clear All</button>): null
            }
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
