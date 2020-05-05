const initialState = {
  "show": false
};

export const types = {
    SET_SHOW: "SET_SHOW",
};

export const actions = {
  "setShow": (show) => {
    return {
      type: types.SET_SHOW,
      show,
    };
  }
};

const chartInfoModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SHOW:
      const show = action.show;
      return {...state, show};
    default:
      return state;
  };
};

export default chartInfoModalReducer;
