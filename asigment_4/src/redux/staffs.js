import * as ActionTypes from "./ActionTypes";

export const Staffs = (state = {isLoading: true, isError: null ,staffs: []}, action) => {
   switch (action.type) {
      case ActionTypes.ADD_STAFF:
         return {...state , isLoading: false ,staffs: action.payload};
         break;
      case ActionTypes.STAFFS_LOADING:
         return {...state };
         break;
      case ActionTypes.STAFFS_FAILED:
         return {...state , isLoading: false , isError: action.payload};
         break;
      case ActionTypes.POST_STAFF:
         var staff = action.payload;
         return {...state , isLoading: false , staffs: state.staffs.concat(staff)};
         break;
      case ActionTypes.DELETE_STAFF:
         return {...state , isLoading: false , staffs: action.payload};
         break;
      default: 
         return state;
   }
};
   