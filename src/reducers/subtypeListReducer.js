import {
  GET_POKEMON_SUBTYPE_REQUEST,
  GET_POKEMON_SUBTYPE_SUCCESS,
  GET_POKEMON_SUBTYPE_ERROR,
} from "constants/index";

const initialState = {
  subtypeList: [],
  loading: false,
  error: false,
};

const subtypeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_SUBTYPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POKEMON_SUBTYPE_SUCCESS:
      return {
        ...state,
        subtypeList: action.data.data,
        loading: false,
        error: false,
      };
    case GET_POKEMON_SUBTYPE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default subtypeListReducer;
