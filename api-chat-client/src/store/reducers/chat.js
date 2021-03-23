import * as actionTypes from "../types";

const initialState = {
  id: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET__SOCKETID:
      return {
        ...state,
        id: action.id,
      };

    default:
      return state;
  }
};

export default reducer