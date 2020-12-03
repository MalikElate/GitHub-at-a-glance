import React, { Component } from 'react';
import { Button,  Table} from 'react-bootstrap';
import Details from '../Details/Details'

class StudentList extends Component { 
  state = {
    bio: '', 
    followers: '', 
    avatar_url: '', 
    github_name: '', 
  }

  getDetails = (name) => { 
    this.setState({ 
      github_name: name
    })
    fetch(`https://api.github.com/users/${name}?access_token=913f20e25e454b699cbf7b4d5f3ae7fd516cafc4`)
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
    let DetailsPlaceHolder; 
    if(this.state.followers !== '') { 
      DetailsPlaceHolder = <Details bio={this.state.bio} followers={this.state.followers} avatar_url={this.state.avatar_url} /> 
    } else { 
      DetailsPlaceHolder = <div></div>
    }
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
                  <td><Button variant="success" onClick={()=>this.getDetails(student.github_name)}>Get Details</Button></td>
                  </tr>
                  )
              }
          </tbody>
          </Table> 
          <h2>Details</h2> 
          {DetailsPlaceHolder}
      </div>
    );
  }
}

export default StudentList;
