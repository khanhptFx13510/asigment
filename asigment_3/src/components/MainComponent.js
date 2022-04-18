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
      
      const staffData = JSON.parse(localStorage.getItem("staffs"))
      console.log(staffData);
      
      this.state = {
         staffs: staffData || STAFFS,
         departments: DEPARTMENTS,
         roles: ROLE
      }
      this.addStaff= this.addStaff.bind(this);
   }

   addStaff(staff) {
      this.setState({
         staffs: [...this.state.staffs , staff]
      })
      localStorage.setItem("staffs" , JSON.stringify([...this.state.staffs , staff]));
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
               <Route exact path='/nhanvien' component={() => <HomePage onAdd={this.addStaff} staffs={this.state.staffs} />} />
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