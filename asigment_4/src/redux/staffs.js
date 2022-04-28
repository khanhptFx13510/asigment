import * as ActionTypes from "./ActionTypes";

export const Staffs = (state = {isLoading: true, staffs: []}, action) => {
   switch (action.type) {
      case ActionTypes.ADD_STAFF:
         return {...state , isLoading: false ,staffs: action.payload};
      
      case ActionTypes.STAFFS_LOADING:
         return {...state , isLoading: true ,staffs: []};
      default: 
      return state;
   }
};
   