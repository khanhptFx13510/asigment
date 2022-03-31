import React, { Component } from 'react';
import './App.css';
import { STAFFS } from './shared/staffs.jsx';
import StaffList from './components/StaffListComponent.js';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      staffs: STAFFS,
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>

          
        <StaffList staffs={this.state.staffs} />
      </div>
    );
  }  
}


export default App;
