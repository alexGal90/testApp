import {
  GET_POKEMON_CARDS_REQUEST,
  GET_POKEMON_CARDS_SUCCESS,
  GET_POKEMON_CARDS_ERROR,
} from "constants/index";

const initialState = {
  pokemonList: [],
  loading: false,
  error: false,
};

const pokemonListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_CARDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POKEMON_CARDS_SUCCESS:
      return {
        ...state,
        pokemonList: action.data.cards,
        loading: false,
        error: false,
      };
    case GET_POKEMON_CARDS_ERROR:
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

export default pokemonListReducer;
