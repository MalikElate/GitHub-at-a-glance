import React, { Component } from 'react';

class Details extends Component { 
  render() {
    return (
      <div> 
        <img src={this.props.avatar_url} alt="GitHub profile pic"></img>
        <p>Bio: {this.props.bio}</p> 
        <p>Followers: {this.props.followers}</p> 
      </div>
    );
  }
}

export default Details;
