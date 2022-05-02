import * as ActionTypes from "./ActionTypes";

export const Departments = (state = {
   departmentsLoading: true ,
   departments: [],
   isError: null
}, action) =>{
   switch(action.type){
      case ActionTypes.ADD_DEPARTMENTS:
         return {...state , departments: action.payload , departmentsLoading: false};
         
      case ActionTypes.DEPARTMENTS_LOADING:
         return {...state , departments: [] , departmentsLoading: true};
         
      case ActionTypes.DEPARTMENTS_FAILED:
         return {...state , departmentsLoading: false, isError: action.payload};
          
      default:
         return state;
   }
}