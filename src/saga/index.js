import { takeEvery } from "redux-saga/effects";
import {
  FETCH_POKEMON_DATA,
  FETCH_POKEMON_SUBTYPE,
  FETCH_POKEMON_SUPERTYPE,
  FETCH_POKEMON_RARITY,
} from "constants/index";
import {
  getPokemonCards,
  getPokemonCardsSuccess,
  getPokemonCardsError,
  getPokemonSubtype,
  getPokemonSubtypeSuccess,
  getPokemonSubtypeError,
  getPokemonSupertype,
  getPokemonSupertypeSuccess,
  getPokemonSupertypeError,
  getPokemonRarity,
  getPokemonRaritySuccess,
  getPokemonRarityError,
} from "actions";
import fetchData from "./helpers";

function* fetchPokemonCardsAsync() {
  yield fetchData(
    "https://api.pokemontcg.io/v1/cards?pageSize=250",
    getPokemonCards,
    getPokemonCardsSuccess,
    getPokemonCardsError
  );
}

function* fetchPokemonSubtypeAsync() {
  yield fetchData(
    "https://api.pokemontcg.io/v2/subtypes",
    getPokemonSubtype,
    getPokemonSubtypeSuccess,
    getPokemonSubtypeError
  );
}

function* fetchPokemonSupertypeAsync() {
  yield fetchData(
    "https://api.pokemontcg.io/v2/supertypes",
    getPokemonSupertype,
    getPokemonSupertypeSuccess,
    getPokemonSupertypeError
  );
}

function* fetchPokemonRarityAsync() {
  yield fetchData(
    "https://api.pokemontcg.io/v2/rarities",
    getPokemonRarity,
    getPokemonRaritySuccess,
    getPokemonRarityError
  );
}

export default function* watchFetchData() {
  yield takeEvery(FETCH_POKEMON_DATA, fetchPokemonCardsAsync);
  yield takeEvery(FETCH_POKEMON_SUBTYPE, fetchPokemonSubtypeAsync);
  yield takeEvery(FETCH_POKEMON_SUPERTYPE, fetchPokemonSupertypeAsync);
  yield takeEvery(FETCH_POKEMON_RARITY, fetchPokemonRarityAsync);
}
