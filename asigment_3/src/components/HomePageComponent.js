import React, {Component} from 'react';
import { Card, CardImg, Button , CardTitle, Modal , ModalHeader , Row , Input, Col , Label , CardBody, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => (val && val.length > 0);
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val && (val.length >= len)) || !(val)
const isNumber = (val) => !isNaN(Number(val));

export default class HomePage extends Component {
   constructor(props) {
      super(props);
      this.state={
         isOpenModal: false,
         nameSearched: "",
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.submitSearch = this.submitSearch.bind(this);
      this.submitAddStaff = this.submitAddStaff.bind(this);
   }

   submitSearch(e){
      this.setState({
         nameSearched: e.target.search.value
      });
      e.preventDefault();
   }
   
   toggleModal(){
      this.setState({
         isOpenModal: !this.state.isOpenModal
      })
   }

   submitAddStaff(values){
      const newStaff = {
         id: this.props.staffs.length + 1,
         name: values.nameStaff,
         doB: values.dateOfBirth,
         salaryScale: values.salaryScale,
         startDate: values.startDate,
         department: values.department,
         annualLeave: values.annualLeave,
         overTime: values.overTime,
         salary: 3000000,
         image: '/assets/images/alberto.png',
      };
      this.setState({
         isOpenModal: !this.state.isOpenModal,
      })
      this.props.onAdd(newStaff);
   }
      

   render() {
      const staffs= this.props.staffs
      .filter(staff => {
         if(this.state.nameSearched == ""){
            return staff;
         }
         else if(
            staff.name.toUpperCase().includes(this.state.nameSearched.toUpperCase())
         ){
            return staff;
         }
         
      })
      .map(staff =>{
         return(
            <div key={staff.id} className="col-md-2 col-sm-4 col-6 my-2">
               <Card className="shadow-lg">
                  <Link to={`/nhanvien/${staff.id}`}>
                  <CardImg src={staff.image} width="100%" alt={staff.name} />
                  <CardBody className="bg-dark">
                     <CardTitle>{staff.name}</CardTitle>
                  </CardBody>
                  </Link>
               </Card>
            </div>
   
         )
      });
      
      return (
         <div className="container">
            <div className="row" style={{display: 'flex' , justifyContent: "space-between"}}>
               <div className="row col-md-6 col-sm-12" style={{alignItems: "center",justifyContent:"space-between" }}>
                  <h2>Nhân Viên</h2>
                  <Button className="shadow-lg" color="dark" outline
                  onClick={this.toggleModal}
                  >
                     <span class="fa fa-plus fa-lg"></span>
                  </Button>
               </div>

               <form style={{alignItems:"center",justifyContent:"space-between" }} className="row col-md-6 col-sm-12"
               onSubmit={this.submitSearch}
               >
                  <input type="text" className="col-md-9 col-sm-8 col-8" name="search"
                  placeholder="Tìm kiếm nhân viên" />
                  <Button color="success" type="submit">
                     Search
                  </Button>
               </form>
            </div>
            <hr/>
   
            <div className="row">
               {staffs}
            </div>

            <Modal isOpen={this.state.isOpenModal}>
               <ModalHeader toggle={this.toggleModal}>
                  Thêm nhân viên
               </ModalHeader>
               <ModalBody>
                  <LocalForm onSubmit={this.submitAddStaff}>
                     <Row className="form-group">
                        <Label htmlFor="nameStaff" md={4}>Tên</Label>
                        <Col md={8}>
                        <Control.text  model=".nameStaff" id="nameStaff" name="nameStaff"             
                           placeholder=""
                           className="form-control"
                           validators={{
                              required: required, 
                              minLength: minLength(3),
                              maxLength: maxLength(30)
                           }}
                           />
                           <Errors
                              className="text-danger"
                              model=".nameStaff"
                              show="touched"
                              messages={{
                                 required: 'Yêu cầu nhập',
                                 minLength: 'Yêu cầu nhiều hơn 3 kí tự',
                                 maxLength: 'Yêu cầu ít hơn 30 kí tự'
                              }}
                           />
                        
                        </Col>
                     </Row>

                     <Row className="form-group">
                        <Label htmlFor="dateOfBirth" md={4}>
                           Ngày sinh:   
                        </Label>
                        <Col md={8}>
                        <Control type="date" model=".dateOfBirth" name="dateOfBirth" placeholder="date placeholder"
                        className="form-control"
                        validators={{
                           required,
                        }}
                        />
                        <Errors
                           className="text-danger"
                           model=".dateOfBirth"
                           show="touched"
                           messages={{
                              required: 'Yêu cầu nhập',
                           }}
                        />
                        </Col>
                     </Row>
                     
                     <Row className="form-group">
                        <Label htmlFor="startDate" md={4}>
                           Ngày vào công ty:   
                        </Label>
                        <Col md={8}>
                        <Control type="date" model=".startDate" name="startDate" placeholder="date placeholder"
                        className="form-control"
                        validators={{
                           required,
                        }}
                        />
                        <Errors
                           className="text-danger"
                           model=".startDate"
                           show="touched"
                           messages={{
                              required: 'Yêu cầu nhập',
                           }}
                        />
                        </Col>
                     </Row>
                     {/* phongban */}
                     <Row className="form-group">
                        <Label htmlFor="department" md={4}>
                           Phòng ban   
                        </Label>
                        <Col md={8}>
                        <Control.select model=".department" name="department" placeholder="what is your name?" className="form-control"
                        validators={{
                           required,
                        }}
                        >
                           <option>Sale</option>
                           <option>HR</option>
                           <option>Marketing</option>
                           <option>IT</option>
                           <option>Finance</option>
                        </Control.select>
                        <Errors
                           className="text-danger"
                           model=".department"
                           show="touched"
                           messages={{
                              required: 'Yêu cầu nhập',
                           }}
                        />
                        </Col>
                     </Row>

                     <Row className="form-group">
                        <Label htmlFor="salaryScale" md={4}>
                           Hệ số lương 
                        </Label>
                        <Col md={8}>
                        <Control.text model=".salaryScale" name="salaryScale" 
                        className="form-control"
                        validators={{
                           required, isNumber
                        }}
                        />
                        <Errors
                           className="text-danger"
                           model=".salaryScale"
                           show="touched"
                           messages={{
                              required: 'Yêu cầu nhập',
                              isNumber: 'Dữ liệu nên là số'
                           }}
                        />
                        </Col>
                     </Row>

                     <Row row className="form-group">
                        <Label htmlFor="annualLeave" md={4}>
                           Số ngày nghỉ còn lại  
                        </Label>
                        <Col md={8}>
                        <Control.text model=".annualLeave"name="annualLeave" className="col-12 form-control"
                        validators={{
                           required, isNumber
                        }}
                        />
                        <Errors
                           className="text-danger"
                           model=".annualLeave"
                           show="touched"
                           messages={{
                              required: 'Yêu cầu nhập',
                              isNumber: 'Dữ liệu nên là số'
                           }}
                        />
                        </Col>
                     </Row>

                     <Row className="form-group">
                        <Label htmlFor="overTime" md={4}>
                           Số ngày làm thêm 
                        </Label>
                        <Col md={8}>
                        <Control.text model=".overTime"name="overTime" className="col-12 form-control"
                        validators={{
                           required, isNumber
                        }}
                        />
                        <Errors
                           className="text-danger"
                           model=".overTime"
                           show="touched"
                           messages={{
                              required: 'Yêu cầu nhập',
                              isNumber: 'Dữ liệu nên là số'
                           }}
                        />
                        </Col>
                     </Row>

                     <Button type="submit" color="primary">Thêm</Button>
                  </LocalForm>
               </ModalBody>
            </Modal>
         </div>
      )
   }
                           

   



   
}
         



