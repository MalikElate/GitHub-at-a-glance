import React, { Component } from 'react';
import './App.css'; 
import AboutSection from '../About-section/About.js'; 
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList'; 
import Footer from './Footer'; 
import { Navbar, Container} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="justify-content-center bg-dark"> 
          <h1>GitHub<i> at a Glance</i></h1>
        </Navbar>
        <Container> 
          <AboutSection/>
          <StudentForm/> 
          <StudentList/> 
        </Container> 
        <Footer/>
      </div>
    );
  }
}

export default App;
