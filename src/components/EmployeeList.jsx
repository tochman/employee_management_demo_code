import React, { Component } from 'react';
import axios from 'axios'
import { List, Image } from 'semantic-ui-react'

class EmployeeList extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    this.fetchEmployees()
  }

  async fetchEmployees() {
    let em = await axios.get('https://reqres.in/api/users?per_page=5')
    this.setState({employees: em.data.data})
  }
  
  render() {
    let employeeList
    if (this.state.employees) {
      employeeList = this.state.employees.map(employee => {
        return (
          <List.Item key={employee.id}>
            <Image avatar src={employee.avatar}  />
            <List.Content>
              <List.Header as='p'>{`${employee.first_name} ${employee.last_name}`}</List.Header>
              <List.Description>
                {`${employee.email}`}
              </List.Description>
            </List.Content>
          </List.Item>
        )
      })
    }
    return (
      <div>
        <List>
          {employeeList}
        </List>
        
      </div>
    );
  }
}

export default EmployeeList;