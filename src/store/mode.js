const initialState = {
  mode: "dark",
};

export const types = {
  SET_MODE: "SET_MODE",
};

export const actions = {
  "setMode": (mode) => {
    return {
      type: types.SET_MODE,
      mode,
    };
  }
}

const modeReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.SET_MODE:
      const mode = action.mode;
      return {...state, mode};
    default:
      return state;
  }
}

export default modeReducer;
