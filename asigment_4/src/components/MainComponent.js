import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomePageComponent.js';
import StaffInfo from './StaffInforComponent';
import Department from './DepartmentsComponent';
import SalaryTable from './SalaryComponent';
import DapartmentInfor from './DeparmentInforComponent';
import { Switch, Route, Redirect , withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStaffs , fetchDepartments , fetchSalarys , postStaff , deleteStaff , updateStaff } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
   fetchSalarys: () => {dispatch(fetchSalarys())},
   postStaff: (newStaff) => {dispatch(postStaff(newStaff))},
   deleteStaff: (id) => {dispatch(deleteStaff(id))},
   updateStaff: (staff) => {dispatch(updateStaff(staff))},
});

class Main extends Component {
   componentDidMount(){
      this.props.fetchStaffs();
      this.props.fetchDepartments();
      this.props.fetchSalarys();
   }
            
   render() {
      const StaffWithId = ({match}) => {
         // console.log(match);
         return(
            <StaffInfo 
               departments ={this.props.departments.departments} 
               staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId))[0]}
               updateStaffInfor={this.props.updateStaff}
            />
         )
      }

      const departmentWithName = ({match}) => {

         return (
            <DapartmentInfor
               department={this.props.departments.departments.filter((department) => department.name === match.params.departmentName)[0]}
               staffs = {this.props.staffs.staffs}
            />
         )
      }

      return (
         <div>
            <Header />

            <TransitionGroup>
               <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                  <Switch location={this.props.location}>
                     <Route exact path='/nhanvien' 
                        component={() => 
                           <HomePage staffs={this.props.staffs.staffs}
                           isLoading ={this.props.staffs.isLoading}
                           errMess={this.props.staffs.isError}
                           postStaff={this.props.postStaff}
                           deleteStaff={this.props.deleteStaff}
                           />
                        } 
                     />
                     <Route path='/nhanvien/:staffId' component={StaffWithId} />

                     {/* departments */}
                     <Route exact path="/phongban" component={() => 
                        <Department 
                           departments={this.props.departments.departments} 
                           isLoading ={this.props.departments.departmentsLoading}
                           staffs= {this.props.staffs.staffs}   
                        />}
                     />
                     <Route path="/phongban/:departmentName"
                        component={departmentWithName}
                     />
                     
                     {/* salary Staffs */}
                     <Route path="/bangluong" component={() => 
                        <SalaryTable 
                           salarys={this.props.staffsSalary.staffsSalary}
                           isLoading={this.props.staffsSalary.salaryLoading}
                        />
                     } 
                     />

                     <Redirect to='/nhanvien' />
                  </Switch>

               </CSSTransition>
            </TransitionGroup>

            <Footer />
         </div>
      )
   }
}

export default withRouter(connect( mapStateToProps,mapDispatchToProps)(Main));