import React from "react";
import { Card , CardBody , CardText , CardTitle,  CardImg , Breadcrumb , BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaff({staff}) {
   return(
      <div className="row my-1">
         <div className="col-md-3 col-sm-4 col-12">
            <img src={staff.image} width="100%" />
         </div>
         
         <div className="col-md-9 col-sm-8 col-12">
            <h2>{staff.name}</h2>
            <p> --<i>Ngày sinh: </i> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(staff.doB)))}
            </p>
            <p>
               --<i>Ngày vào công ty: </i>
               {new Intl.DateTimeFormat( { day: '2-digit', month: '2-digit', year: 'numeric'}).format(new Date(Date.parse(staff.startDate)))}
            </p>
            <p>
               --<i>Phòng Ban: </i>
               {staff.department.name}
            </p>
         </div>
      </div>
   )
}


function StaffInfo(props) {
   if(props.staff != null) {
      return(
         <div className="container">
            <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem><Link to="/nhanvien">Nhân Viên</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
               </Breadcrumb>
            </div>
            <RenderStaff staff= {props.staff} />
           
         </div>
      )
   } else{
      return null;
   }

}

export default StaffInfo;