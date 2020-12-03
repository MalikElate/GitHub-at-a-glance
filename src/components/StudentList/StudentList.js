import React, { Component } from 'react';

class StudentList extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(this.props.studentList)}  
        <table>
        <thead> 
          </thead> 
          <tbody>
              { this.props.studentList.map(student => 
               <tr>
                  <td key={student.id}>
                    {student.github_name} 
                    <button>Delete</button>
                  </td>
                  </tr>
                  )
              }
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
