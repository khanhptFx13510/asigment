import React, {useState} from 'react';
import { Breadcrumb , BreadcrumbItem , Button , Modal , ModalHeader , Row , Col , Label, ModalBody } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import { FadeTransform } from 'react-animation-components';

const isNumber = (val) => !isNaN(Number(val)) || !(val);

function RenderStaff({staff , departments , update }) {
   const [isOpenModal, setIsOpenModal] = useState(false);

   // Convert department to update API
   function departmentId (params) {
      switch(params){
         case "Sale":
            return "Dept01";
            break;
         case "HR":
            return "Dept02";
            break;
         case "Marketing":
            return  "Dept03";
            break;
         case "IT":
            return "Dept04";
            break;
         case "Finance":
            return "Dept05";
            break;
      }
   };

   // submit form update staff
   function updateStaff(values){
      const newInfor = {
         id: staff.id,
         name: values.nameStaff,
         doB: values.dateOfBirth,
         salaryScale: values.salaryScale,
         startDate: values.startDate,
         departmentId: departmentId(values.department),
         annualLeave: values.annualLeave,
         overTime: values.overTime,
         salary: 3000000,
         image: '/assets/images/alberto.png',
      };
      setIsOpenModal(!isOpenModal);
      update(newInfor);
   }

   const department = departments.filter((department) =>department.id === staff.departmentId)[0];
   return(
      <div>
         <div className="row">
            <Button onClick={()=> setIsOpenModal(!isOpenModal)}>Update</Button>
         </div>
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
         <Modal isOpen={isOpenModal}>
            <ModalHeader toggle={() => setIsOpenModal(!isOpenModal)}>
               Update
            </ModalHeader>
            <ModalBody>
               <LocalForm onSubmit={updateStaff}>
                  {/* ten nhan vien */}
                  <Row className="form-group">
                     <Label htmlFor="nameStaff" md={4}>Tên</Label>
                     <Col md={8}>
                        <Control.text model=".nameStaff" name="nameStaff"
                           className="form-control"
                        />
                     </Col>
                  </Row>
                  {/* ngay sinh cua nhan vien */}
                  <Row className="form-group">
                     <Label htmlFor="dateOfBirth" md={4}>
                        Ngày sinh:   
                     </Label>
                     <Col md={8}>
                        <Control type="date" name="dateOfBirth" 
                           model=".dateOfBirth"
                           className="form-control"
                        />
                     </Col>
                  </Row>
                  {/* ngay vao cong ty */}
                  <Row className="form-group">
                     <Label htmlFor="startDate" md={4}>
                        Ngày vào công ty:
                     </Label>
                     <Col md={8}>
                     <Control type="date" model=".startDate" name="startDate" className="form-control" />
                     </Col>
                  </Row>
                  {/* phong ban cong ty */}
                  <Row className="form-group">
                     <Label htmlFor="department" md={4}>
                        Phòng ban
                     </Label>
                     <Col md={8}>
                        <Control.select model=".department" name="department" className="form-control"
                        defaultValue={"Sale"}>
                           <option selected="selected">Sale</option>
                           <option>HR</option>
                           <option>Marketing</option>
                           <option>IT</option>
                           <option>Finance</option>
                        </Control.select>
                     </Col>
                  </Row>
                  {/* he so luong */}
                  <Row className="form-group">
                        <Label htmlFor="salaryScale" md={4}>
                           Hệ số lương 
                        </Label>
                        <Col md={8}>
                        <Control.text model=".salaryScale" name="salaryScale" 
                        className="form-control"
                        validators={{
                           isNumber
                        }}
                        />
                        <Errors
                           className="text-danger"
                           model=".salaryScale"
                           show="touched"
                           messages={{
                              isNumber: 'Dữ liệu nên là số'
                           }}
                        />
                        </Col>
                     </Row>
                  {/* Số ngày nghỉ còn lại */}
                  <Row className="form-group">
                     <Label htmlFor="annualLeave" md={4}>
                        Số ngày nghỉ còn lại  
                     </Label>
                     <Col md={8}>
                     <Control.text model=".annualLeave" name="annualLeave" className="col-12 form-control"
                     validators={{
                        isNumber
                     }}
                     />
                     <Errors
                        className="text-danger"
                        model=".annualLeave"
                        show="touched"
                        messages={{
                           isNumber: 'Dữ liệu nên là số'
                        }}
                     />
                     </Col>
                  </Row>
                  {/* Số ngày làm thêm */}
                  <Row className="form-group">
                     <Label htmlFor="overTime" md={4}>Số ngày làm thêm</Label>
                     <Col md={8}>
                        <Control.text model=".overTime" name="overTime" className="form-control" 
                        validators={{isNumber}}/>
                        <Errors
                           model=".overTime"
                           className="text-danger"
                           show="touched"
                           messages={{
                              isNumber: 'Dữ liệu nên là số'}}
                        />
                     </Col>
                  </Row>
                  {/* Button submit update */}
                  <Button color="primary">
                     Update
                  </Button>
               </LocalForm>
            </ModalBody>
         </Modal>
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
                  update = {props.updateStaffInfor}
               />

            </FadeTransform>
           
         </div>
      )
   } else{
      return null;
   }

}

export default StaffInfo;