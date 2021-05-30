import { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { MDBDataTableV5 } from "mdbreact";
import Select from "react-select";
import Loader from "react-loader-spinner";
import {
  fetchPokemonData,
  fetchPokemonSubtype,
  fetchPokemonSupertype,
  fetchPokemonRarity,
  setFilter,
} from "actions";
import {
  PokemonListContainer,
  PokemonFiltersContainer,
  SingleFilterContainer,
  CardLinkContainer,
  LoaderContainer,
} from "./styles";
import { getTableData, createSelectOptions } from "./helpers";
import ServerErrorMessage from "components/ui/ServerErrorMessage";

const PokemonListPage = (props) => {
  const {
    getPokemonList,
    pokemonListReducer,
    pokemonListReducer: { pokemonList },
    getPokemonSubtypes,
    subtypeListReducer,
    subtypeListReducer: { subtypeList },
    getPokemonSupertypes,
    supertypeListReducer,
    supertypeListReducer: { supertypeList },
    getPokemonRarities,
    rarityListReducer,
    rarityListReducer: { rarityList },
    filterReducer: { filters },
    setFilters,
  } = props;

  const [currentPokemonList, setCurrentPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList();
    getPokemonSubtypes();
    getPokemonSupertypes();
    getPokemonRarities();
  }, []);

  const parsedPokemonList = useMemo(
    () =>
      pokemonList.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        subtype: pokemon.subtype,
        supertype: pokemon.supertype,
        rarity: pokemon.rarity,
        detailedInfoLink: (
          <CardLinkContainer to={{ pathname: `/pokemon?id=${pokemon.id}` }}>
            Show Card
          </CardLinkContainer>
        ),
      })),
    [pokemonList]
  );

  useEffect(() => {
    setCurrentPokemonList(parsedPokemonList);
  }, [parsedPokemonList]);

  const subtypeOptions = useMemo(
    () => createSelectOptions(subtypeList),
    [subtypeList]
  );

  const supertypeOptions = useMemo(
    () => createSelectOptions(supertypeList),
    [supertypeList]
  );

  const rarityOptions = useMemo(
    () => createSelectOptions(rarityList),
    [rarityList]
  );

  const onFilterChange = (filterName, e) => {
    const chosenSubtype = e.map((subtype) => subtype.value);
    let chosenFilters = { ...filters };
    chosenFilters[filterName] = chosenSubtype;
    setFilters(chosenFilters);
  };

  useEffect(() => {
    setCurrentPokemonList(
      parsedPokemonList.filter(
        (pokemon) =>
          (filters.subtype.length
            ? filters.subtype.includes(pokemon.subtype)
            : pokemon) &&
          (filters.supertype.length
            ? filters.supertype.includes(pokemon.supertype)
            : pokemon) &&
          (filters.rarity.length
            ? filters.rarity.includes(pokemon.rarity)
            : pokemon)
      )
    );
  }, [parsedPokemonList, filters]);

  return (
    <PokemonListContainer>
      <PokemonFiltersContainer>
        {subtypeListReducer.error && (
          <ServerErrorMessage>
            Failed to fetch sub type list. Message: {subtypeListReducer.message}
          </ServerErrorMessage>
        )}
        <SingleFilterContainer>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={subtypeOptions}
            onChange={(e) => onFilterChange("subtype", e)}
            placeholder="Select Sub Type..."
          />
        </SingleFilterContainer>
        {supertypeListReducer.error && (
          <ServerErrorMessage>
            Failed to fetch super type list. Message:{" "}
            {supertypeListReducer.message}
          </ServerErrorMessage>
        )}
        <SingleFilterContainer>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={supertypeOptions}
            onChange={(e) => onFilterChange("supertype", e)}
            placeholder="Select Super Type..."
          />
        </SingleFilterContainer>
        {rarityListReducer.error && (
          <ServerErrorMessage>
            Failed to fetch rarities list. Message: {rarityListReducer.message}
          </ServerErrorMessage>
        )}
        <SingleFilterContainer>
          <Select
            closeMenuOnSelect={false}
            isMulti
            options={rarityOptions}
            onChange={(e) => onFilterChange("rarity", e)}
            placeholder="Select Rarity..."
          />
        </SingleFilterContainer>
      </PokemonFiltersContainer>
      {pokemonListReducer.loading ? (
        <LoaderContainer>
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        </LoaderContainer>
      ) : pokemonListReducer.error ? (
        <ServerErrorMessage>
          Failed to fetch rarities list. Message: {pokemonListReducer.message}
        </ServerErrorMessage>
      ) : (
        <MDBDataTableV5
          hover
          data={getTableData(currentPokemonList)}
          entriesOptions={[5, 10, 25, 50]}
          entries={5}
        />
      )}
    </PokemonListContainer>
  );
};

const mapStateToProps = ({
  pokemonListReducer,
  subtypeListReducer,
  supertypeListReducer,
  rarityListReducer,
  filterReducer,
}) => ({
  pokemonListReducer,
  subtypeListReducer,
  supertypeListReducer,
  rarityListReducer,
  filterReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getPokemonList: () => dispatch(fetchPokemonData()),
  getPokemonSubtypes: () => dispatch(fetchPokemonSubtype()),
  getPokemonSupertypes: () => dispatch(fetchPokemonSupertype()),
  getPokemonRarities: () => dispatch(fetchPokemonRarity()),
  setFilters: (filters) => dispatch(setFilter(filters)),
});

const PokemonListPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonListPage);

export default PokemonListPageContainer;
