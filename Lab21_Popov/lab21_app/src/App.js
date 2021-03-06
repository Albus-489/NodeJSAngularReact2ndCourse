import logo from './logo.svg';
import React, { useState, Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      // T1
      txt1: <p></p>
    }
  }

  render(){
    return(

      <Container className="p-3">
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
      </Container>

    )
  }
}

export default App;
