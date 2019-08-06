/// <reference types="cypress" />
import EmployeeList from '../../src/components/EmployeeList'
import React from 'react'

describe('<EmployeeList />', () => {
  it('works', () => {
    const employeesFactory = [
      {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
      },
      {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
      },
      {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
      },
      {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      }
    ]
    cy.mount(<EmployeeList />)
    cy.get(<EmployeeList />)
      .invoke('setState', { employees: employeesFactory })
    cy.get(<EmployeeList />)
      .its('state')
      .should('deep.equal', { employees: employeesFactory })
    cy.get('div[role="listitem"]')
      .should('have.length', 5)
      .first()
      .should('contain', 'George Bluth')
  })
});