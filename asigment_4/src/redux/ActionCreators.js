import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

// Action dispatch staffs

export const fetchStaffs =() => (dispatch) => {
   dispatch(staffsLoading(true))
   return fetch(baseUrl +'staffs')
   .then(
      (response) => {
         if (response.ok) {
            return response;
         } 
         // else {
         //    var error = new Error(
         //       "Error" + response.status + response.statusText
         //    );
         //    error.response = response;
         //    throw error;
         // }
      },
      // (error) => {
      //   var errmess = new Error(error.message);
      //   throw errmess;
      // }
    )
   .then(response => response.json())
   .then(staffs => {
      dispatch(addStaff(staffs));
   })
};

export const addStaff = (staffs) => ({
   type: ActionTypes.ADD_STAFF,
   payload: staffs 
});

export const staffsLoading = () => ({
   type: ActionTypes.STAFFS_LOADING,
});

//---------- Action dispatch departments ---------------

export const fetchDepartments = () => (dispatch) => {
   dispatch(departmentsLoading(true));

   return fetch(baseUrl + 'departments')
   .then(
      (response) => {
         if(response.ok){
            return response;
         }
      }
   )
   .then(response => response.json())
   .then(departments =>{
      console.log(departments);
      dispatch(addDepartments(departments))})
};

export const addDepartments = (departments) =>({
   type: ActionTypes.ADD_DEPARTMENTS,
   payload: departments
});

export const departmentsLoading = () =>({
   type: ActionTypes.DEPARTMENTS_LOADING 
});

//---------- Action dispatch Salary Staffs ---------------

export const fetchSalarys = () => (dispatch) => {
   dispatch(salaryLoading(true));
   
   return fetch(baseUrl + 'StaffsSalary')
   .then(
      (response) => {
         if(response.ok){
            return response;
         }
      }
   )
   .then(response => response.json())
   .then(StaffsSalary => {
      dispatch(addSalarysStaffs(StaffsSalary));
   })
}

export const addSalarysStaffs = (salaryStaffs) =>({
   type: ActionTypes.ADD_SALARYSTAFFS,
   payload: salaryStaffs,
});

export const salaryLoading = () => ({
   type: ActionTypes.SALARYS_LOADING,
});