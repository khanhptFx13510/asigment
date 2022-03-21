import React, { Component } from 'react';
import dateFormat from 'dateformat'; 
import { Button , Card , CardBody , CardText ,CardTitle , CardImg} from 'reactstrap';

class StaffList extends Component {
   constructor(props) {
      super(props);
      
      this.state = {
         selectedStaff: null
      }
      
   }

   onStaffSelect(staff) {
      this.setState({ 
         selectedStaff: staff
      })
   }
   renderRole(staff){
      if(staff.salaryScale > 1){
         return <CardText>Chức danh: <i>{this.props.roles.MANAGER_STAFF}</i></CardText>
      }else{
         return <CardText>Chức danh: <i>{this.props.roles.NORMAL_STAFF}</i></CardText>
      }
   }
   renderSelectedStaff(staff) {
      if(staff != null){
         
         return (
            <div className="row">
               <Card className="col-12 col-md-6">
                  <h3>Họ và tên: {staff.name}</h3>
                  <CardBody>
                     <CardText>Ngày sinh: {dateFormat(staff.doB , "dd/mm/yyyy")}</CardText>
                     <CardText>Ngày vào công ty: {dateFormat(staff.startDate , "dd/mm/yyyy")}</CardText>
                     <CardText>
                        Phòng ban: {staff.department.name}
                     </CardText>
                     {this.renderRole(this.state.selectedStaff)}
                     <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                     <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                     <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                  </CardBody>
               </Card>
               <Card className="col-12 col-md-6">
                  <CardImg src={staff.image} />
               </Card>
            </div>
         )
         

      } else{
         return <div></div>
      }
   }

   render() {
      const staffs = this.props.staffs.map(staff => {
         return (
            <div key={staff.id} className="col-12 col-sm-6 col-md-4 m-0.5 mb-2">
               <Button block size="lg" color="secondary"
               onClick={() => this.onStaffSelect(staff)}>
                  {staff.name}
               </Button>
            </div>
         )
            
            
      })
      return (
         <div className="container">
            <div className="row">
               
            </div>
            <div className="row">
               {staffs}
            </div>
            <div>
               {this.renderSelectedStaff(this.state.selectedStaff)}
            </div>

         </div>
            

      )
   }
}
export default StaffList;