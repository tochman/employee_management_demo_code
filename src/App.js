import React from 'react';
import EmployeeList from './components/EmployeeList'
import { Container } from 'semantic-ui-react'


function App() {
  debugger
  return (
    <>
      <Container>
        <section id="header">
          <h1>Employee List</h1>
        </section>
        <section id="main">
          <EmployeeList />
        </section>
      </Container>
    </>
  );
}

export default App;
