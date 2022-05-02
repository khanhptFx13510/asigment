import * as ActionTypes from "./ActionTypes";

export const Departments = (state = {
   departmentsLoading: true ,
   departments: []
}, action) =>{
   switch(action.type){
      case ActionTypes.ADD_DEPARTMENTS:
         return {...state , departments: action.payload , departmentsLoading: false};
         break;
      case ActionTypes.DEPARTMENTS_LOADING:
         return {...state , departments: [] , departmentsLoading: true};
         break;
         
      default:
         return state;
   }
}