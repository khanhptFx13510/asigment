import * as ActionTypes from "./ActionTypes";

export const StaffsSalary = (state= {salaryLoading: true , staffsSalary: []}, action) => {
   switch(action.type){
      case ActionTypes.SALARYS_LOADING:
         return {...state , salaryLoading: true, staffsSalary: []};
      break;
      
      case ActionTypes.ADD_SALARYSTAFFS:
         return {...state , salaryLoading: false , staffsSalary: action.payload};
      break;
      
      default: 
         return state;
   }
};