import { combineReducers } from "redux";
import pokemonListReducer from "./pokemonListReducer";
import subtypeListReducer from "./subtypeListReducer";
import supertypeListReducer from "./supertypeListReducer";
import rarityListReducer from "./rarityListReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  pokemonListReducer,
  subtypeListReducer,
  supertypeListReducer,
  rarityListReducer,
  filterReducer,
});
