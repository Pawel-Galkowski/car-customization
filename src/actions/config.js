import { UPDATE, CHANGE_ERROR } from './types';

const updateCar = (model) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE,
      payload: model,
    });
  } catch (err) {
    dispatch({
      type: CHANGE_ERROR,
      payload: { msg: err.statusText, status: err.status },
    });
  }
};

export default updateCar;
