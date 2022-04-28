import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomePageComponent.js';
import StaffInfo from './StaffInforComponent';
import Department from './DepartmentsComponent';
import SalaryTable from './SalaryComponent';
import { Switch, Route, Redirect , withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStaffs , fetchDepartments , fetchSalarys} from '../redux/ActionCreators';


const mapStateToProps = (state) => {
   return{ 
      staffs: state.staffs,
      departments: state.departments,
      staffsSalary: state.staffsSalary,
   }
}

const mapDispatchToProps = (dispatch) =>({
   fetchStaffs: () => {dispatch(fetchStaffs())},
   fetchDepartments : () => {dispatch(fetchDepartments())},
   fetchSalarys: () => {dispatch(fetchSalarys())}
})

class Main extends Component {
   componentDidMount(){
      this.props.fetchStaffs();
      this.props.fetchDepartments();
      this.props.fetchSalarys();
   }
   
   // constructor(props) {
   //    super(props);
      // this.state={
         //    staffs: this.props.staffs ,
         // };
         // this.addStaff = this.addStaff.bind(this);
      // }
      
      // addStaff = (staff) => {
         //    this.setState({
            //       staffs:[...this.state.staffs , staff]
            //    })
            // }
            
            
   render() {
      // console.log(this.props.staffsSalary);
      const StaffWithId = ({match}) => {
         return(
            <StaffInfo 
               departments ={this.props.departments.departments} 
               staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId))[0]} />
         )
      }
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path='/nhanvien' 
                  component={() => 
                     <HomePage staffs={this.props.staffs.staffs}
                     isLoading ={this.props.staffs.isLoading}
                      />
                  } 
               />
               <Route path='/nhanvien/:staffId' component={StaffWithId} />

               <Route path="/phongban" component={() => 
                  <Department 
                     departments={this.props.departments.departments} 
                     isLoading ={this.props.departments.departmentsLoading}   
                  />}
               />
                      
               <Route path="/bangluong" component={() => 
                  <SalaryTable 
                     salarys={this.props.staffsSalary.staffsSalary}
                     isLoading={this.props.staffsSalary.salaryLoading}
                  />
               } 
               />

               <Redirect to='/nhanvien' />
            </Switch>
            <Footer />
         </div>
      )
   }
}

export default withRouter(connect( mapStateToProps,mapDispatchToProps)(Main));