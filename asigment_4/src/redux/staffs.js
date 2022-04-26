import * as ActionTypes from "./ActionTypes";
// import {STAFFS} from '../shared/staffs';

export const Staffs = (state = {staffs: []}, action) => {
   switch(action.type) {
      case ActionTypes.ADD_STAFF:
         return {...state ,staffs : action.payloads}
      default: 
      return state;
   }
};
   