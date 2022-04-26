import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const fetchStaffs =() => (dispatch) => {
   fetch(baseUrl + 'staffs')
   .then(response => response.json())
   .then(staffs => {
      console.log(staffs);
      dispatch(addStaff(staffs));
   })
}

export const addStaff = (staffs) => ({
   type: ActionTypes.ADD_STAFF,
   payload: staffs 
})