import React, {useState} from 'react';
import {Loading} from './LoadingComponent';
import { Card , CardBody , CardTitle , Breadcrumb , BreadcrumbItem , Button , CardText } from 'reactstrap';
import { Link } from 'react-router-dom';


function SalaryTable (props){
   
   const [listId , setListId] = useState(props.salarys);
   const [isChanged , setIsChanged] = useState(true);
   
   function LayoutSalary() {
      if(isChanged == true){
         setListId(
            listId.sort( function(a, b) {
               return parseFloat(b.id) - parseFloat(a.id);
            })
         )
      } else{
         setListId(
            listId.sort( function(a, b) {
               return parseFloat(a.id) - parseFloat(b.id);
            })
         )
      }
   }
   
   
   const salarys= listId.map(salary =>{
      return(
         <div key={salary.id} className="col-md-4 col-sm-6 col-12 my-2">
            <Card className="shadow-lg">
               <CardBody className="bg-dark text-success">
                  <CardTitle><h4>{salary.name}</h4></CardTitle>
                  <CardBody>
                     <CardText>-Mã nhân viên: {salary.id}</CardText>
                     <CardText>-Hệ số lương: {salary.salaryScale}</CardText>
                     <CardText>-Số giờ làm thêm: {salary.overTime} giờ</CardText>

                  </CardBody>
                  <div className="container bg-secondary align-items-center">
                     <h5>Lương: {parseInt(salary.salary , 10)}</h5>
                  </div>
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
            onClick={() => {
               setIsChanged(!isChanged);
               LayoutSalary()
               }}>
               {isChanged ? 
                  "Sắp xếp nhân viên theo mã nhân viên từ lớn đến nhỏ" 
                  : 
                  "Sắp xếp nhân viên theo thứ tự từ nhỏ đến lớn"
               }
            </Button>
         </div>

         <hr />

         <div className="row">
            {props.isLoading? <Loading /> : salarys}
         </div>

      </div>
   )
}

export default SalaryTable;