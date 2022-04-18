import React, {Component} from 'react';
import { Card, CardImg, Button , CardTitle, Modal , ModalHeader , Form , FormGroup , Input, Col , Label , CardBody, ModalBody ,FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
   constructor(props) {
      super(props);
      this.state={
         nameStaff:"",
         dateOfBirth:"",
         startDate:"",
         department: "Sale",
         salaryScale:1,
         annualLeave:0,
         overTime:0,
         touched:{
            nameStaff:false,
            dateOfBirth:false,
            startDate:false,
            salaryScale:false,
            annualLeave:false,
            overTime:false,
         },
         isOpenModal: false,
         nameSearched: "",
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.submitSearch = this.submitSearch.bind(this);
      this.handleChangeInput = this.handleChangeInput.bind(this);
      this.submitAddStaff = this.submitAddStaff.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
   }

   submitSearch(e){
      this.setState({
         nameSearched: e.target.search.value
      });
      e.preventDefault();
   }
   
   toggleModal(){
      this.setState({
         isOpenModal: !this.state.isOpenModal,
         nameStaff:"",
         dateOfBirth:"",
         startDate:"",
         department:"Sale",
         salaryScale:1,
         annualLeave:0,
         overTime:0,
         touched:{
            nameStaff:false,
            dateOfBirth:false,
            startDate:false,
            salaryScale:false,
            annualLeave:false,
            overTime:false,
         },
      })
   }

   handleChangeInput(e){      
      const name = e.target.name
      this.setState({
         [name]: e.target.value,
      })
   }

   submitAddStaff(values){
      if(this.state.touched.nameStaff === false || 
         this.state.touched.dateOfBirth === false || 
         this.state.touched.startDate === false){
         this.setState({
            touched: {
               nameStaff: true,
               dateOfBirth: true,
               startDate: true
            },
         })
      }
      else if(this.state.nameStaff.length >2 && this.state.nameStaff.length < 30 
         && this.state.dateOfBirth !== "" 
         && this.state.startDate !== ""
         && (isNaN(this.state.salaryScale) == false)
         && (isNaN(this.state.annualLeave) == false)
         && (isNaN(this.state.overTime) == false)) {
         
         const newStaff = {
            id: this.props.staffs.length,
            name: this.state.nameStaff,
            doB: this.state.dateOfBirth,
            salaryScale:this.state.salaryScale,
            startDate: this.state.startDate,
            department: this.state.department,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
            salary: 3000000,
            image: '/assets/images/alberto.png',
         }

         this.setState({
            isOpenModal: !this.state.isOpenModal,
            touched: {
               nameStaff: false,
               dateOfBirth: false,
               startDate: false
            }
         })
         this.props.onAdd(newStaff);
      }
      values.preventDefault();
                    
   }

         

   handleBlur = (field) => (event) => {
      this.setState({
         touched:{...this.state.touched , [field]: true}
      })
   }

   validate(nameStaff , dateOfBirth, startDate, department , salaryScale ,annualLeave , overTime){
      const errors={
         nameStaff: "",
         dateOfBirth: "",
         startDate: "",
         department: "",
         salaryScale: "",
         annualLeave: "",
         overTime: "",
      }
      if(this.state.touched.nameStaff && nameStaff.length === 0){
         errors.nameStaff= "Yêu cầu nhập"
      }else if(this.state.touched.nameStaff && nameStaff.length < 3) {
         errors.nameStaff = "Yêu cầu nhiều hơn 2 ký tự"
      } else if(this.state.touched.nameStaff && nameStaff.length > 30){
         errors.nameStaff= "Yêu cầu ít hơn 30 ký tự"
      } 
      // errors date
      if(this.state.touched.dateOfBirth && dateOfBirth.length < 1){
         errors.dateOfBirth = "Yêu cầu nhập"
      }
      if(this.state.touched.startDate && startDate.length < 1){
         errors.startDate = "Yêu cầu nhập"
      }
      
      if(this.state.touched.department && department.length < 1){
         errors.department = "Yêu cầu nhập"
      }
      
      //check number
      if(this.state.touched.salaryScale && 
         (isNaN(this.state.salaryScale) == true || salaryScale.length < 1)){
         errors.salaryScale = "Yêu cầu nhập số"
      }
      if(this.state.touched.annualLeave && 
         (isNaN(this.state.annualLeave) || annualLeave.length < 1)){
         errors.annualLeave = "Yêu cầu nhập số"
      }
      if(this.state.touched.overTime && 
         (isNaN(this.state.overTime) || overTime.length < 1)){
         errors.overTime = "Yêu cầu nhập số"
      }
      return errors;
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
         };
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
   
      
      const errors=this.validate(this.state.nameStaff , this.state.dateOfBirth , this.state.startDate , this.state.department, this.state.salaryScale, this.state.annualLeave, this.state.overTime)
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
                  <Form onSubmit={this.submitAddStaff}>
                     <FormGroup row className="control-group">
                        <Label htmlFor="nameStaff" md={4}>
                           Tên   
                        </Label>
                        <Col md={8}>
                           <Input type="text" name="nameStaff" placeholder="what is your name?" 
                           onChange={this.handleChangeInput}
                           onBlur={this.handleBlur("nameStaff")}
                           valid={errors.nameStaff === ""}
                           invalid={errors.nameStaff !== ""} />
                           <FormFeedback>
                              {errors.nameStaff}
                           </FormFeedback>
                        </Col>
                     </FormGroup>

                     <FormGroup row className="control-group">
                        <Label htmlFor="dateOfBirth" md={4}>
                           Ngày sinh:   
                        </Label>
                        <Col md={8}>
                        <Input type="date" name="dateOfBirth" placeholder="dd/MM/yyyy"
                        onChange={this.handleChangeInput}
                        onBlur={this.handleBlur("dateOfBirth")}
                        valid={errors.dateOfBirth === ""}
                        invalid={errors.dateOfBirth !== ""}
                        />
                        <FormFeedback>
                           {errors.dateOfBirth}
                        </FormFeedback>
                        </Col>
                     </FormGroup>

                     <FormGroup row className="control-group">
                        <Label htmlFor="startDate" md={4}>
                           Ngày vào công ty:   
                        </Label>
                        <Col md={8}>
                        <Input type="date" name="startDate" placeholder="date placeholder"
                        onChange={this.handleChangeInput}
                        onBlur={this.handleBlur("startDate")}
                        valid={errors.startDate === ""}
                        invalid={errors.startDate !== ""} 
                        />
                        <FormFeedback>
                           {errors.startDate}
                        </FormFeedback>
                        </Col>
                     </FormGroup>

                     <FormGroup row className="control-group">
                        <Label htmlFor="department" md={4}>
                           Phòng ban   
                        </Label>
                        <Col md={8}>
                        <Input type="select" name="department" placeholder="what is your name?" className="col-12 form-control"
                        value={this.state.department}
                        onChange={this.handleChangeInput}
                        onBlur={this.handleBlur("department")}
                        valid={errors.department === ""}
                        invalid={errors.department !== ""} 
                        >
                           <option>Sale</option>
                           <option>HR</option>
                           <option>Marketing</option>
                           <option>IT</option>
                           <option>Finance</option>
                        </Input>
                        <FormFeedback>
                           {errors.department}
                        </FormFeedback>
                        </Col>
                     </FormGroup>

                     <FormGroup row className="control-group">
                        <Label htmlFor="salaryScale" md={4}>
                           Hệ số lương   
                        </Label>
                        <Col md={8}>
                        <Input type="text" name="salaryScale" className="col-12 form-control"
                        value={this.state.salaryScale}
                        onChange={this.handleChangeInput}
                        onBlur={this.handleBlur("salaryScale")}
                        valid={errors.salaryScale === ""}
                        invalid={errors.salaryScale !== ""}
                        />
                        <FormFeedback>
                           {errors.salaryScale}
                        </FormFeedback>
                        </Col>
                     </FormGroup>

                     <FormGroup row className="control-group">
                        <Label htmlFor="annualLeave" md={4}>
                           Số ngày nghỉ còn lại  
                        </Label>
                        <Col md={8}>
                        <Input type="text" name="annualLeave" className="col-12 form-control"
                        value={this.state.annualLeave}
                        onChange={this.handleChangeInput}
                        onBlur={this.handleBlur("annualLeave")}
                        valid={errors.annualLeave === ""}
                        invalid={errors.annualLeave !== ""}
                        />
                        <FormFeedback>
                           {errors.annualLeave}
                        </FormFeedback>
                        </Col>
                     </FormGroup>

                     <FormGroup row className="control-group">
                        <Label htmlFor="overTime" md={4}>
                           Số ngày làm thêm 
                        </Label>
                        <Col md={8}>
                        <Input type="text" name="overTime" className="col-12 form-control"
                        value= {this.state.overTime}
                        onChange={this.handleChangeInput}
                        onBlur={this.handleBlur("overTime")}
                        valid={errors.overTime === ""}
                        invalid={errors.overTime !== ""}
                        />
                        <FormFeedback>
                           {errors.overTime}
                        </FormFeedback>
                        </Col>
                     </FormGroup>

                     <Button type="submit" color="primary">Thêm</Button>
                  </Form>
               </ModalBody>
            </Modal>
         </div>
      )
   }
                           

   



   
}




