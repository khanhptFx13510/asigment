import React, {Component} from 'react';
import { Card, CardImg, Button , CardTitle, Breadcrumb, BreadcrumbItem , CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';




export default class HomePage extends Component {
   constructor(props) {
      super(props);
      
   }

   // toggleSearch(){

   // }
   render() {
      const staffs= this.props.staffs.map(staff =>{
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
                  <Button className="shadow-lg" color="dark"
                  >
                     <span class="fa fa-plus fa-lg"></span>
                  </Button>
               </div>

               <div style={{alignItems: "center",justifyContent:"space-between" }} className="row col-md-6 col-sm-12">
                  <input type="text" className="col-md-9 col-sm-8 col-8" 
                  placeholder="Tìm kiếm nhân viên" />
                  <Button color="success"
                  // onClick={toggleSearch}
                  >
                     Search
                  </Button>
               </div>
            </div>
            <hr/>
   
            <div className="row">
               {staffs}
   
            </div>
         </div>
      )
   }

   



   
}

