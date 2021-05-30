import {
  FETCH_POKEMON_DATA,
  GET_POKEMON_CARDS_REQUEST,
  GET_POKEMON_CARDS_SUCCESS,
  GET_POKEMON_CARDS_ERROR,
  FETCH_POKEMON_SUBTYPE,
  GET_POKEMON_SUBTYPE_REQUEST,
  GET_POKEMON_SUBTYPE_SUCCESS,
  GET_POKEMON_SUBTYPE_ERROR,
  FETCH_POKEMON_SUPERTYPE,
  GET_POKEMON_SUPERTYPE_REQUEST,
  GET_POKEMON_SUPERTYPE_SUCCESS,
  GET_POKEMON_SUPERTYPE_ERROR,
  FETCH_POKEMON_RARITY,
  GET_POKEMON_RARITY_REQUEST,
  GET_POKEMON_RARITY_SUCCESS,
  GET_POKEMON_RARITY_ERROR,
  SET_FILTER,
} from "constants/index";

export const fetchPokemonData = () => {
  return { type: FETCH_POKEMON_DATA };
};

export const getPokemonCards = () => ({
  type: GET_POKEMON_CARDS_REQUEST,
});

export const getPokemonCardsSuccess = (data) => ({
  type: GET_POKEMON_CARDS_SUCCESS,
  data,
});

export const getPokemonCardsError = (error) => ({
  type: GET_POKEMON_CARDS_ERROR,
  message: error,
});

export const fetchPokemonSubtype = () => {
  return { type: FETCH_POKEMON_SUBTYPE };
};

export const getPokemonSubtype = () => ({
  type: GET_POKEMON_SUBTYPE_REQUEST,
});

export const getPokemonSubtypeSuccess = (data) => ({
  type: GET_POKEMON_SUBTYPE_SUCCESS,
  data,
});

export const getPokemonSubtypeError = (error) => ({
  type: GET_POKEMON_SUBTYPE_ERROR,
  message: error,
});

export const fetchPokemonSupertype = () => {
  return { type: FETCH_POKEMON_SUPERTYPE };
};

export const getPokemonSupertype = () => ({
  type: GET_POKEMON_SUPERTYPE_REQUEST,
});

export const getPokemonSupertypeSuccess = (data) => ({
  type: GET_POKEMON_SUPERTYPE_SUCCESS,
  data,
});

export const getPokemonSupertypeError = (error) => ({
  type: GET_POKEMON_SUPERTYPE_ERROR,
  message: error,
});

export const fetchPokemonRarity = () => {
  return { type: FETCH_POKEMON_RARITY };
};

export const getPokemonRarity = () => ({
  type: GET_POKEMON_RARITY_REQUEST,
});

export const getPokemonRaritySuccess = (data) => ({
  type: GET_POKEMON_RARITY_SUCCESS,
  data,
});

export const getPokemonRarityError = (error) => ({
  type: GET_POKEMON_RARITY_ERROR,
  message: error,
});

export const setFilter = (filters) => ({
  type: SET_FILTER,
  filters,
});
