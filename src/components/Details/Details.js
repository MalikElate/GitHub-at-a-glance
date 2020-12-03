import React, { Component } from 'react';

class Details extends Component { 
  render() {
    return (
      <div> 
          {JSON.stringify(this.props)}
        <img src={this.props.avatar_url}></img>
        <p>Bio: {this.props.bio}</p> 
        <p>Followers: {this.props.followers}</p> 
      </div>
    );
  }
}

export default Details;
