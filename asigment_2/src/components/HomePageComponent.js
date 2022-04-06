import React, {useState} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem , CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';




function HomePage(props){
   const [name , setName] = useState('');
   const [listName , setListName] = useState()
   console.log(listName);

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
         item.name === name || item.id === name
         ));
      console.log(setListName);
   }

   const renderSearch= () =>{
      if(listName != undefined && listName.length > 0){
         console.log(listName);
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
      else{
         return <>{staffs}</>
      }
   }


   return (
      <div className="container">
         <div className="row" style={{display: 'flex' , justifyContent: "space-between"}}>
            <h2>Nhân Viên</h2>
            <div style={{paddingTop: "12px" , textAlign: "center" }}>
               <p>
                  Tìm kiếm: <input type="text" 
                     value={name}
                     onChange={(e) => {setName(e.target.value)}}
                  />
                  <button onClick={() => handleName()}>search</button>
               </p>
            </div>
         </div>
         <hr/>
         <div className="row">
            {renderSearch()}
         </div>

      </div>
   )
}

export default HomePage;