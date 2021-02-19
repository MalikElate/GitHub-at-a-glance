import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Student {
    constructor(github = '') {
        this.github_name = github;
    }
};

class CandidateForm extends Component {
    //new Student calls the constructor in the Student Class.
    state = new Student();

    // Called when the input field changes
    handleChange = (event) => {
        this.setState(new Student(event.target.value));
    }

    // Called when the submit button is pressed
    handleSubmit = (event) => {
        if (this.state.github_name) { 
            event.preventDefault();
            this.props.dispatch({type: 'ADD_CANDIDATE', payload: this.state})
            this.clearStudentFields();
        } else { 
            alert('Please add a github username')
        }
    }

    // Clear fields of the form by reseting the user
    clearStudentFields = () => {
        this.setState(new Student());
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{paddingBottom: '20px'}}>
                <input onChange={this.handleChange} placeholder="GitHub username" value={this.state.github_name} name="github_name" />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

// PropTypes is an optional library that helps developers.
// This will tell the parent component what functions it must implement to 
// use this component. And it throws an error that is easy to find for a developer if they forget it.
CandidateForm.propTypes = {
    addStudent: PropTypes.func.isRequired,
};

const mapStateToProps = reduxState => ({
    reduxState,
  });
  
  export default connect(mapStateToProps)(CandidateForm); 