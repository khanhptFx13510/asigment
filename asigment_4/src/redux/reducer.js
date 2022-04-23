import { STAFFS , DEPARTMENTS , ROLE } from '../shared/staffs.jsx';

export const initialState = {
   staffs : STAFFS,
   departments : DEPARTMENTS,
   roles : ROLE
};

export const Reducer = (state = initialState , action) => {
   return state;
}