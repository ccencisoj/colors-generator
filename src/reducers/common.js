import {
  UPDATE_DIVISOR
} from 'constants/actionTypes';

const initialState = {
  divisor: 0
};

export default (state=initialState, action)=> {
  switch (action.type) {
    case UPDATE_DIVISOR:
      return {
        ...state,
        divisor: action.payload
      }
  
    default:
      return state;
  }
}