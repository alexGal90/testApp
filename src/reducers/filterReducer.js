import { SET_FILTER } from "constants/index";

const initialState = {
  filters: {
    subtype: [],
    supertype: [],
    rarity: [],
  },
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: action.filters,
      };
    default:
      return state;
  }
};

export default filterReducer;
