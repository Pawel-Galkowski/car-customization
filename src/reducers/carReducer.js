import {
  CHANGE_ERROR,
  UPDATE,
} from '../actions/types';

const createState = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE:
      return {
        ...state,
        car: payload,
      };
    case CHANGE_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default createState;
