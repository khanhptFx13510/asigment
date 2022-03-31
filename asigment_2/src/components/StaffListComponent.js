// import React, { Component } from 'react';
// import dateFormat from 'dateformat'; 
// import { Button } from 'reactstrap'

// class StaffList extends Component {
//    constructor(props) {
//       super(props);
      
//       this.state = {
//          selectedStaff: null
//       }

//    }

//    onStaffSelect(staff) {
//       this.setState({ 
//          selectedStaff: staff
//       })
//    }

//    renderSelectedStaff(staff) {
//       if(staff != null){
         
//       }
//    }

//    render() {
//       const staffs = this.props.staffs.map(staff => {
//          return (
//             <div key={staff.id} className="col-12 col-sm-6 col-md-4 m-0.5 mb-2">
//                <Button block size="lg" color="secondary"
//                onClick={() => onStaffSelect(staff)}>
//                   {staff.name}</Button>
               
//             </div>
//          )
            
            
//       })
//       return (
//          <div className="container">
//             <div className="row">
//                {staffs}
//             </div>
//          </div>
            

//       )
//    }
// }
// export default StaffList;