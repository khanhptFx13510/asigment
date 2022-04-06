import React, {useState , useEffect} from 'react';
import { Card, CardImg, Button , CardTitle, Breadcrumb, BreadcrumbItem , CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';




function HomePage(props){
   const [name , setName] = useState('');
   const [listName , setListName] = useState();
   
   const staffs= props.staffs.map(staff =>{
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

   
   const handleName=() => {
      setListName(props.staffs.filter(item => 
         item.name.toUpperCase() === name.toUpperCase() || item.id === parseInt(name , 10)
         ));
   }

   const renderSearch= () =>{
      if(listName != undefined && listName.length > 0){
         const newStaffs = listName.map(staff =>{
            return (
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
         return <>{newStaffs}</>
      }

   }


   return (
      <div className="container">
         <div className="row" style={{display: 'flex' , justifyContent: "space-between"}}>
            <h2>Nhân Viên</h2>
            <div style={{paddingTop: "12px" , textAlign: "center" }}>
               <p>
                  Tìm kiếm: <input type="text" className="mr-1 shadow-lg"
                     value={name}
                     onChange={(e) => {setName(e.target.value)}}
                     placeholder="họ và tên hoặc số Id"
                  />
                  <Button className="shadow-lg" color="success" onClick={() => handleName() }>
                     Search
                  </Button>
               </p>
            </div>
         </div>
         <hr/>

         <div className="row">
            {renderSearch() || staffs}

         </div>
      </div>
   )
}

export default HomePage;