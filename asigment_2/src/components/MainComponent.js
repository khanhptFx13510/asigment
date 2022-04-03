import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomePageComponent.js';
import StaffInfo from './StaffInforComponent';
import Department from './DepartmentsComponent';
import SalaryTable from './SalaryComponent';
import { STAFFS , DEPARTMENTS , ROLE } from '../shared/staffs.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
   constructor(props) {
      super(props);

      this.state = {
         staffs: STAFFS,
         departments: DEPARTMENTS,
         roles: ROLE
      }
   }
   render() {
      const StaffWithId = ({match}) => {
         return(
            <StaffInfo 
               departments ={this.state.departments} 
               staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId))[0]} />
         )
      }
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path='/nhanvien' component={() => <HomePage staffs={this.state.staffs} />} />
               <Route path='/nhanvien/:staffId' component={StaffWithId} />
               <Route path="/phongban" component={() => <Department departments={this.state.departments} />} />
               <Route path="/bangluong" component={() => <SalaryTable salarys={this.state.staffs} />} />
               <Redirect to='/nhanvien' />
            </Switch>
            <Footer />
         </div>
      )
   }
}

export default Main;