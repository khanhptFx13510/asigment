import React, { Component } from 'react';
import './App.css';
import { STAFFS , DEPARTMENTS , ROLE } from './shared/staffs.jsx';
import StaffList from './components/StaffListComponent.js';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      staffs: STAFFS,
      departments: DEPARTMENTS,
      roles: ROLE
    }

  }

  render() {
    return (
      <div className="bg-light text-dark">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>

          
        <StaffList staffs={this.state.staffs} 
        departments={this.state.departments} 
        roles= {this.state.roles} />
      </div>
    );
  }  
}


export default App;
