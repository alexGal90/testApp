import {
  GET_POKEMON_RARITY_REQUEST,
  GET_POKEMON_RARITY_SUCCESS,
  GET_POKEMON_RARITY_ERROR,
} from "constants/index";

const initialState = {
  rarityList: [],
  loading: false,
  error: false,
};

const rarityListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_RARITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POKEMON_RARITY_SUCCESS:
      return {
        ...state,
        rarityList: action.data.data,
        loading: false,
        error: false,
      };
    case GET_POKEMON_RARITY_ERROR:
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

export default rarityListReducer;
