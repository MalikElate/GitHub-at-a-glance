import React, { Component } from 'react';
import './studentlist.css'; 
import { connect } from 'react-redux'; 
import { Table, Button } from 'react-bootstrap';
import Details from '../Details/Details'

class StudentList extends Component { 
  state = {
    bio: '', 
    followers: '', 
    avatar_url: '', 
    github_name: '', 
  }

  componentDidMount() { 
    this.props.dispatch({type: 'GET_ALL_CANDIDATES'}); 
  }

  getDetails = (name) => { 
    this.props.dispatch({type: 'GET_ALL_CANDIDATES_DETAILS', payload: name}); 
  }

  removeCandidate = (name) => {
    this.props.dispatch({type: 'REMOVE_CANDIDATE', payload: name});
  }

  render() {
    console.log('rendering')
    // this.props.dispatch({type: 'GET_ALL_CANDIDATES_DETAILS', payload: this.state.currentlyDisplayedUsers}); 
    return (
      <div>
        <Table striped bordered hover>
          <thead> 
            <tr>
              <th>Username</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
            </thead> 
            <tbody>
              { this.props.reduxState.candidates.map((student, i) => 
                <tr key={i}>
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
          <h2>Details
        </h2> 
          <div className='detail-card-container'>
          {
            this.props.reduxState.candidatesDetails.map((user, i) => 
            <div className='detail-card-item'>
              <Details 
                key={i}
                  bio={user.bio}
                  followers={user.followers} 
                  avatar_url={user.avatar_url} 
                  name={user.github_name} 
                  currentlyDisplayedUsers={this.state.currentlyDisplayedUsers}
                  /> 
              </div>
            )
          }
          </div>
      </div>
    );
  }
}


const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(StudentList); 