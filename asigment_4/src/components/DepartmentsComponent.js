import React from 'react';
import { Card, CardTitle , CardBody } from 'reactstrap';
import { Loading } from './LoadingComponent';

function Department (props){
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
      return(
         <div key={department.id} className="col-md-4 col-sm-6 col-12 my-3">
            <Card className="shadow-lg text-warning bg-secondary">
               <h1>{department.name}</h1>
               <CardBody>
                  <CardTitle>-Số lượng nhân viên: {department.numberOfStaff}</CardTitle>

               </CardBody>
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