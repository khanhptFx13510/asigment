import React from 'react';
import { Breadcrumb , BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { FadeTransform } from 'react-animation-components';

function RenderStaff({staff , departments}) {

   const department = departments.filter((department) =>department.id === staff.departmentId)[0];
   return(
      <div>
         <div className="row my-1 shadow-lg">
            <div className="col-md-3 col-sm-4 col-12">
               <img src={staff.image} width="100%" alt=""/>
            </div>

            <div className="col-md-9 col-sm-8 col-12">
               <h2>{staff.name}</h2>
               <p> --<i>Ngày sinh: </i> {dateFormat(staff.doB , "dd/mm/yyyy")}
               </p>
               <p>
                  --<i>Ngày vào công ty: </i>
                  {dateFormat(staff.startDate, "dd/mm/yyyy")}
               </p>
               <p>
                  --<i>Phòng Ban: </i>
                  {department.name || staff.departmentId}
               </p>
               <p>
                  --<i>Số ngày nghỉ còn lại: </i>
                  {staff.annualLeave}
               </p>
               <p>
                  --<i>Số ngày nghỉ còn lại: </i>
                  {staff.overTime}
               </p>
            </div>
         </div>
         
      </div>
   )
}


function StaffInfo(props) {
   // console.log(props.updateStaffInfor);
   if(props.staff != null) {
      return(
         <div className="container">
            <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem><Link to="/nhanvien">Nhân Viên</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
               </Breadcrumb>
            </div>
            <hr />
            <FadeTransform 
               in
               transformProps={{
                  exitTransform: 'scale(0.5) translateY(-50%)'
               }}
            >
               <RenderStaff staff= {props.staff} departments={props.departments}
               />

            </FadeTransform>
           
         </div>
      )
   } else{
      return null;
   }

}

export default StaffInfo;