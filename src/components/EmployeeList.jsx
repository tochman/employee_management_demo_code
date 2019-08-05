import React, { Component } from 'react';
import axios from 'axios'

class EmployeeList extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    this.fetchEmployees()
  }

  async fetchEmployees() {
    debugger
    let em = await axios.get('https://reqres.in/api/users?per_page=5')
    this.setState({employees: em.data.data})
  }
  
  render() {
    let employeeList = this.state.employees.map(employee => {
      return (
        <li key={employee.id}>
          {`${employee.first_name} ${employee.last_name}`}
        </li>
      )
    })
    return (
      <div>
        <ul>
          {employeeList}
        </ul>
        
      </div>
    );
  }
}

export default EmployeeList;