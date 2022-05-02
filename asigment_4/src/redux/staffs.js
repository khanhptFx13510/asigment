import * as ActionTypes from "./ActionTypes";

export const Staffs = (state = {isLoading: true, isError: null ,staffs: []}, action) => {
   switch (action.type) {
      case ActionTypes.ADD_STAFF:
         return {...state , isLoading: false ,staffs: action.payload};

      case ActionTypes.STAFFS_LOADING:
         return {...state };

      case ActionTypes.STAFFS_FAILED:
         return {...state , isLoading: false , isError: action.payload};

      default: 
         return state;
   }
};
   