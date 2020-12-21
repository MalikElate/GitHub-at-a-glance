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

  componentDidMount() { 
    
  }

  getDetails = (name) => { 
    this.setState({ 
      currentlyDisplayedUsers: [...this.state.currentlyDisplayedUsers, name]  
    })
    fetch(`https://api.github.com/users/${name}?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4`)
      .then((response) => response.json())
      .then(
        (data) => {console.log('This is the data', data) 
        this.setState({ 
          currentlyDisplayedUsers: [
            ...this.state.currentlyDisplayedUsers,
            {
              bio: data.bio, 
              followers: data.followers, 
              avatar_url: data.avatar_url
            }]
        })
      })
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
          </tr>
          </thead> 
          <tbody>
              { this.props.studentList.map(student => 
               <tr key={this.props.studentList.indexOf(student)}>
                  <td>
                    {student.github_name} 
                  </td>
                  <td><Button variant="success" onClick={()=>this.getDetails(student.github_name)}>Get Details</Button></td>
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
