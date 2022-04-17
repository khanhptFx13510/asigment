import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomePageComponent.js';
import StaffInfo from './StaffInforComponent';
import Department from './DepartmentsComponent';
import SalaryTable from './SalaryComponent';
import { Switch, Route, Redirect , withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return{ 
      staffs: state.staffs,
      departments: state.departments,
      roles: state.roles
   }
}

class Main extends Component {
   constructor(props) {
      super(props);
      this.state={
         staffs: this.props.staffs,
      };
      this.addStaff = this.addStaff.bind(this);
   }

   addStaff = (staff) => {
      this.setState({
         staffs:[...this.state.staffs , staff]
      })
      console.log("add", staff);
   }


   render() {
      const StaffWithId = ({match}) => {
         return(
            <StaffInfo 
               departments ={this.props.departments} 
               staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId))[0]} />
         )
      }
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path='/nhanvien' component={() => 
                     <HomePage onAdd={this.addStaff} staffs={this.state.staffs} />
                  } 
               />
               <Route path='/nhanvien/:staffId' component={StaffWithId} />
               <Route path="/phongban" component={() => <Department departments={this.props.departments} />} />
               <Route path="/bangluong" component={() => <SalaryTable salarys={this.state.staffs} />} />
               <Redirect to='/nhanvien' />
            </Switch>
            <Footer />
         </div>
      )
   }
}

export default withRouter(connect(mapStateToProps)(Main));