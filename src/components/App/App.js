import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList';

class App extends Component {
  
  state = {
    studentList: [],
  };
  componentDidMount(){
    console.log('Component did mount')
    this.getAllStudents(); 
  }

  getAllStudents = () => { 
    console.log('getting all studnets')
    axios.get('/students')
      .then( (response) => {
        // The info we want is in the response data property
        console.log('Response:', response.data);
        this.setState({ 
          studentList: response.data
        })
      })
      .catch( (error)=> {
        alert('Something bad happened');
        console.log('Error', error)
      })
  }
  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);
    // POST your data here 
    axios.post('/students', {
        github_name: newStudent.github_name
    })
    .then( (response) => {
      // The info we want is in the response data property
      console.log('Response:', response.data);
      this.getAllStudents(); 
    })
    .catch( (error)=> {
      alert('Something bad happened');
      console.log('Error', error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br/>
        <StudentForm addStudent={this.addStudent}/>
        <StudentList studentList={this.state.studentList} />
      </div>
    );
  }
}

export default App;
