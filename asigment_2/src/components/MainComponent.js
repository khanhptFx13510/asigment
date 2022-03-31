import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomePageComponent.js';

import { STAFFS } from '../shared/staffs.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
   constructor(props) {
      super(props);
      this.state = {
         staffs: STAFFS
      }
   }
   render() {

      return (
         <div>
            <Header />
            <Switch>
               <Route exact path='/nhanvien' component={() => <HomePage staffs={this.state.staffs} />} />
               
               <Redirect to='/nhanvien' />
            </Switch>
            <Footer />
         </div>
      )
   }
}

export default Main;