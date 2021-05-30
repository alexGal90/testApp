import {
  GET_POKEMON_SUPERTYPE_REQUEST,
  GET_POKEMON_SUPERTYPE_SUCCESS,
  GET_POKEMON_SUPERTYPE_ERROR,
} from "constants/index";

const initialState = {
  supertypeList: [],
  loading: false,
  error: false,
};

const supertypeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_SUPERTYPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POKEMON_SUPERTYPE_SUCCESS:
      return {
        ...state,
        supertypeList: action.data.data,
        loading: false,
        error: false,
      };
    case GET_POKEMON_SUPERTYPE_ERROR:
      return {
        ...state,
        message: action.message.message,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default supertypeListReducer;
