import React, { Component } from 'react';
import dateFormat from 'dateformat'; 

class StaffList extends Component {
   constructor(props) {
      super(props);
      console.log(this.props.staffs);
   }
   render() {
      const staffs = this.props.staffs.map(staff => {
         return (
            <div className="row">
               
            </div>
         )
      })
      return (
         <div className="container">
            
         </div>

      )
   }
}
export default StaffList;