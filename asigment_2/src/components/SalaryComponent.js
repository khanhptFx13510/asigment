import React from 'react';

import { Card , CardBody , CardTitle , Breadcrumb , BreadcrumbItem , Button , CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

function calculator(salary){
   return salary.salaryScale * 3000000 + salary.overTime * (200000 / 8) * salary.salaryScale;

}
   

function LayoutSalary(salarys) {
   for(let i=0; i<salarys.length; i++) {
      console.log(salarys[i]);
      parseInt(calculator(salarys[i]));
      // console.log(calculator(salarys[i]));
   }
}

function SalaryTable (props){
   const salarys= props.salarys.map(salary =>{
      return(
         <div key={salary.id} className="col-md-4 col-sm-2 col-12 my-2">
            <Card className="shadow-lg">
               <CardBody className="bg-dark text-success">
                  <CardTitle><h4>{salary.name}</h4></CardTitle>
                  <CardBody>
                     <CardText>-Mã nhân viên: {salary.id}</CardText>
                     <CardText>-Hệ số lương: {salary.salaryScale}</CardText>
                     <CardText>-Số giờ làm thêm: {salary.overTime} giờ</CardText>
                     <div className="container bg-primary align-items-center">
                        <h5>Lương: {parseInt(calculator(salary) , 10)}</h5>
                     </div>

                  </CardBody>
               </CardBody>
            </Card>
         </div>
      )
   });

   return(
      <div className="container">
         <div className="row">
            <Breadcrumb>
               <BreadcrumbItem>
                  <Link to="/nhanvien">Nhân Viên</Link>
               </BreadcrumbItem>
               <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
            </Breadcrumb>
         </div>

         <hr />
         <div className="row">
            <Button className="shadow-lg mr-2" size="lg" color="secondary"
            onClick={() => LayoutSalary({salarys})}>
               Sắp xếp theo mức lương từ cao đến thấp
            </Button>
            <Button className="shadow-lg" size="lg" color="secondary"
            onClick={() => LayoutSalary({salarys})}>
               Sắp xếp theo mức lương từ thấp đến cao
            </Button>

         </div>
         <hr />

         <div className="row">
            {salarys}
         </div>

      </div>
   )
}

export default SalaryTable;