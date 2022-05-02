import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

// post staff to server
export const addStaff = (staff) =>({
   type: ActionTypes.POST_STAFF,
   payload: staff
});

export const postStaff = (newStaff) => (dispatch) =>{
   console.log(newStaff);
   return fetch(baseUrl + 'staffs',{
      method: "POST",
        body: JSON.stringify(newStaff),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
   })
   .then(response => {
      if (response.ok) {
            return response;
      } else {
            var error = new Error('Error' + response.status + ': '+ response.statusText);
            error.response = response;
            throw error;
      }
   },
   error => {
      throw error;
   })
   .then(response => response.json())
   .then(response => {
      dispatch(addStaff(newStaff));
      dispatch(addSalarysStaffs(response));
   })
   .catch(error => {
      alert('Your staff could not be posted\nError: ' + error.message)
   });
};
      

// update staff information
export const updateStaff = (staff) => (dispatch) => {
   console.log(staff);
   return fetch(baseUrl + "staffs", {
      method: 'PATCH',
      body: JSON.stringify(staff),
      headers: { 'Content-Type': 'application/json'},
      credentials: "same-origin",
   })
   .then(response =>{
      console.log(response);
      if(response.ok) {
         return response;
      } else {
         var error = new Error("Update is failed");
         error.response = response;
         throw error;
      }
   }, error =>{
      throw error;
   })
   .then(response => response.json())
   .then(response => {
      console.log(fetchStaffs)
      dispatch(fetchStaffs());
      dispatch(addSalarysStaffs(response));
   })
   .catch(error => {
      alert( error.message)
   });
}

// delete a staff
export const deleteStaff = (IdStaff) => (dispatch) => {
   console.log(baseUrl + `staffs/${IdStaff}`);

   return fetch(baseUrl + `staffs/${IdStaff}` , {
      method: 'DELETE',
   })
   .then(response => response.json())
   .then(staffs => {
      dispatch(deleted(staffs));
      dispatch(addSalarysStaffs(staffs));
   });
};

export const deleted = (afterDeleted) => ({
   type: ActionTypes.DELETE_STAFF,
   payload: afterDeleted,
})

// Action dispatch staffs

export const fetchStaffs =() => (dispatch) => {
   dispatch(staffsLoading(true))
   return fetch(baseUrl +'staffs')
   .then(
      (response) => {
         if (response.ok) {
            return response;
         } 
         else {
            var error = new Error(
               "Error" + response.status + response.statusText
            );
            error.response = response;
            throw error;
         }
      },
      (error) => {
        var errmess = new Error(error.message);
        console.log(errmess);
        throw errmess;
      }
   )
   .then(response => response.json())
   .then(staffs => {
      dispatch(addStaffs(staffs));
   })
   .catch(err => dispatch(fetchStaffsFailed(err.message)));
};

export const addStaffs = (staffs) => ({
   type: ActionTypes.ADD_STAFF,
   payload: staffs 
});

export const staffsLoading = () => ({
   type: ActionTypes.STAFFS_LOADING,
});

export const fetchStaffsFailed =(error) => ({
   type: ActionTypes.STAFFS_FAILED,
   payload: error
})

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
      dispatch(addDepartments(departments))}
   )
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
};

export const addSalarysStaffs = (salaryStaffs) =>({
   type: ActionTypes.ADD_SALARYSTAFFS,
   payload: salaryStaffs,
});

export const salaryLoading = () => ({
   type: ActionTypes.SALARYS_LOADING,
});