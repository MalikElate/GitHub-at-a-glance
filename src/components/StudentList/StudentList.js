import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

class StudentList extends Component {
  render() {
    return (
      <div>
        <Table striped bordered hove>
        <thead> 
          </thead> 
          <tbody>
              { this.props.studentList.map(student => 
               <tr key={this.props.studentList.indexOf(student)}>
                  <td>
                    {student.github_name} 
                  </td>
                  <td><Button variant="primary">Delete</Button></td>
                  </tr>
                  )
              }
          </tbody>
          </Table>
      </div>
    );
  }
}

export default StudentList;
