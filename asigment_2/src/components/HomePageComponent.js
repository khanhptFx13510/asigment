import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function HomePage(props){
   const staffs= props.staffs.map(staff =>{
      return(
         <div></div>
      )
   });
   return (
      <div className="container">
         <div className="row">
            <Breadcrumb>
               <BreadcrumbItem active>
                  <Link to="/nhanvien">Nhanvien</Link>
               </BreadcrumbItem>
               {/* <Breadcrumb active>nhanvien</Breadcrumb> */}
            </Breadcrumb>
         </div>
      </div>
   )
}

export default HomePage