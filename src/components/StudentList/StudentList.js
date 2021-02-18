import React, { Component } from 'react';
import { Button,  Table} from 'react-bootstrap';
import Details from '../Details/Details'

class StudentList extends Component { 
  state = {
    bio: '', 
    followers: '', 
    avatar_url: '', 
    github_name: '', 
    currentlyDisplayedUsers: [],
  }

  getDetails = (name) => { 
    this.setState({ 
      currentlyDisplayedUsers: [...this.state.currentlyDisplayedUsers, name]  
    }); 
  }

  removeCandidate = (name) => {
    // this.props.dispatch({type: 'REMOVE_CANDIDATE', payload: name});
  }

  render() {
    console.log(this.state.currentlyDisplayedUsers)
    return (
      <div>
        <Table striped bordered hover>
        <thead> 
          <tr>
            <th>Name</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
          </thead> 
          <tbody>
              { this.props.studentList.map(student => 
               <tr key={this.props.studentList.indexOf(student)}>
                  <td>
                    {student.github_name} 
                  </td>
                  <td><Button variant="success" onClick={()=>this.getDetails(student.github_name)}>Get Details</Button></td>
                  <td><Button variant="danger" onClick={()=>this.removeCandidate(student.github_name)}>Remove Candidate</Button></td>
                  </tr>
                  )
              }
          </tbody>
          </Table> 
          <h2>Details</h2> 
          {this.state.currentlyDisplayedUsers.map(user => 
              <Details bio={user.bio} followers={user.followers} avatar_url={user.avatar_url} name={user.github_name} /> 
            )}
      </div>
    );
  }
}

export default StudentList;
