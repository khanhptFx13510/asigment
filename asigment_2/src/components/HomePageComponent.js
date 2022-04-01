import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem , CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';


function HomePage(props){
   const staffs= props.staffs.map(staff =>{
      return(
         <div key={staff.id} className="col-md-2 col-sm-4 col-6 my-2">
            <Card>
               <Link to={`/nhanvien/${staff.id}`}>
               <CardImg src={staff.image} width="100%" alt={staff.name} />
               <CardBody>
                  <CardTitle>{staff.name}</CardTitle>
               </CardBody>
               </Link>
            </Card>

         </div>
      )
   });
   return (
      <div className="container">
         <div className="row">
            <h2>Nhân Viên</h2>
         </div>
         <hr/>
         <div className="row">
            {staffs}
         </div>   
      </div>
   )
}

export default HomePage;