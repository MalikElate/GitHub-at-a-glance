import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Details extends Component { 
  render() {
    return (
      <div> 
        <Card style={{ width: '18rem' }}>
          <Card.Img src={this.props.avatar_url} alt="GitHub profile pic" /> 
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title> 
            <Card.Text>Followers: {this.props.followers}</Card.Text>  
            <Card.Text> Bio: {this.props.bio} </Card.Text> 
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Details;
