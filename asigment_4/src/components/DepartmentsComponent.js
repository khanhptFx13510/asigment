import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle , CardBody } from 'reactstrap';
import { Loading } from './LoadingComponent';

function Department (props){
   console.log(props);
   if(props.isLoading){
      return (
      <div className="container">
         <div className="row">
            <Loading />
         </div>
      </div>
      )
   }

   const department = props.departments.map(department => {
      // console.log(props.staffs);
      const numberDept = props.staffs.filter(staff => staff.departmentId === department.id).length;
      return(
         <div key={department.id} className="col-md-4 col-sm-6 col-12 my-3">
            <Card className="shadow-lg text-warning bg-secondary">
               <Link to={`/phongban/${department.name}`}>
                  <h1>{department.name}</h1>
                  <CardBody>
                     <CardTitle>-Số lượng nhân viên: {numberDept}</CardTitle>
                     {/* <NumberOfStaffS /> */}
                  </CardBody>
               </Link>

            </Card>
         </div>

      )
   })

   return(
      <div className="container">
         <div className="row">
            {department}
         </div>
         
      </div>
   )
}

export default Department;