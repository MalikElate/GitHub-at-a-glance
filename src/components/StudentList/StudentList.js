import React, { Component } from 'react';
import { Button,  Table} from 'react-bootstrap';

class StudentList extends Component { 
  state = {
    bio: '', 
    followers: '', 
    avatar_url: ''
  }

  getDetails = () => { 
    fetch('https://api.github.com/users/MalikElate?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4')
      .then((response) => response.json())
      .then(
        (data) => {console.log('This is the data', data) 
        this.setState({ 
          bio: data.bio, 
          followers: data.followers, 
          avatar_url: data.avatar_url
        })
      })
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
        <thead> 
          </thead> 
          <tbody>
              { this.props.studentList.map(student => 
               <tr key={this.props.studentList.indexOf(student)}>
                  <td>
                    {student.github_name} 
                  </td>
                  <td><Button variant="success" onClick={this.getDetails}>Get Details</Button></td>
                  </tr>
                  )
              }
          </tbody>
          </Table> 
          <h2>Details</h2>
      </div>
    );
  }
}

export default StudentList;
