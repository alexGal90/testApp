import { connect } from "react-redux";
import { useState, useMemo } from "react";
import Loader from "react-loader-spinner";
import {
  ImageContainer,
  DetailedInfoContainer,
  CardTitle,
  GoBackButton,
  LoaderContainer,
} from "./styles";

const PokemonDetailedInfoPage = (props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const {
    match: {
      params: { id },
    },
    pokemonListReducer,
    history: { goBack },
  } = props;

  const pokemonInfo = useMemo(
    () => pokemonListReducer.pokemonList.find((pokemon) => pokemon.id === id),
    [pokemonListReducer, id]
  );

  return (
    <DetailedInfoContainer>
      <GoBackButton onClick={goBack}>Go Back</GoBackButton>
      <CardTitle>{pokemonInfo.name}</CardTitle>
      <ImageContainer isVisible={isImageLoaded}>
        <img
          src={`${pokemonInfo.imageUrlHiRes}`}
          onLoad={() => setIsImageLoaded(true)}
          width="500"
          alt="Pokemon Card"
        />
      </ImageContainer>
      {!isImageLoaded && (
        <LoaderContainer>
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
        </LoaderContainer>
      )}
    </DetailedInfoContainer>
  );
};

const mapStateToProps = ({ pokemonListReducer }) => ({
  pokemonListReducer,
});

const PokemonDetailedInfoPageContainer = connect(mapStateToProps)(
  PokemonDetailedInfoPage
);

export default PokemonDetailedInfoPageContainer;
