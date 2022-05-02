import React , {Component} from 'react';
import { Breadcrumb , BreadcrumbItem , Card , CardImg , CardBody , CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class DapartmentInfor extends Component {

   render(){
      const staffOfDepart = this.props.staffs
      .filter((staff) => staff.departmentId === this.props.department.id)
      .map((staff) =>{
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
      })
      
      return(
         <div className="container">
            <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem>
                     <Link to="/phongban">Phòng Ban</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>{this.props.department.name}</BreadcrumbItem>
               </Breadcrumb>
            </div>

            <hr />

            <div className="row">
               {staffOfDepart}
            </div>
         </div>
      )
   }
}