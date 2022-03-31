import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomePageComponent.js';

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
      const StaffWithId = (match) => {
         return(
            <StaffInfo staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId))[0]} />
         )
      }
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path='/nhanvien' component={() => <HomePage staffs={this.state.staffs} />} />
               <Route path='/nhanvien/:staffId' component={StaffWithId} />
               <Redirect to='/nhanvien' />
            </Switch>
            <Footer />
         </div>
      )
   }
}

export default Main;