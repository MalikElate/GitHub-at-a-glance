import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
YOU SHOULDNT NEED TO MODIFY ANYTHING IN THIS FILE
*/


// Class here is a way to make a Student object. Not a react component!
class Student {
    //constuctor functions are run when we make a new student. Here it saves the github parameter as the objects github_name property
    constructor(github = '') {
        this.github_name = github;
    }
};

class StudentForm extends Component {
    //new Student calls the constructor in the Student Class.
    state = new Student();

    // Called when the input field changes
    handleChange = (event) => {
        this.setState(new Student(event.target.value));
    }

    // Called when the submit button is pressed
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addStudent(this.state);
        this.clearStudentFields();
    }

    // Clear fields of the form by reseting the user
    clearStudentFields = () => {
        this.setState(new Student());
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} placeholder="GitHub username" value={this.state.github_name} name="github_name" />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

// PropTypes is an optional library that helps developers.
// This will tell the parent component what functions it must implement to 
// use this component. And it throws an error that is easy to find for a developer if they forget it.
StudentForm.propTypes = {
    addStudent: PropTypes.func.isRequired,
};

export default StudentForm;
